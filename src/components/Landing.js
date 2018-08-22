import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

class Landing extends Component {
  handleRedirect(id) {
    //   set active picture
    this.props.setActivePhoto(id);
    // use async here?
    // this.props.history.push("/photo");
  }

  renderCards(photos) {
    return (
      <div className="row">
        {Object.keys(photos).map(key => {
          const photoData = photos[key];
          return this.renderCard(photoData, key);
        })}
      </div>
    );
  }

  renderCard({ thumbnailUrl, title }, key) {
    return (
      <div key={key} className="col s4 m4">
        <div className="card">
          <div className="card-image" onClick={() => this.handleRedirect(key)}>
            <img src={thumbnailUrl} />
            <span className="card-title">{title}</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { photos } = this.props;
    if (!photos) {
      return (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    }
    console.log(photos);
    return this.renderCards(photos.photos);
  }
}

function mapStateToProps({ photos }) {
  return { photos };
}

export default connect(
  mapStateToProps,
  actions
)(Landing);
