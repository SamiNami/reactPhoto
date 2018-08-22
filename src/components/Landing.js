import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Landing extends Component {
  async handleRedirect(id) {
    await this.props.setActivePhoto(id);
    this.props.history.push("/photo");
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
            <img alt={title} src={thumbnailUrl} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { photoStore } = this.props;
    if (!photoStore) {
      return (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    }
    return this.renderCards(photoStore.photos);
  }
}

function mapStateToProps({ photoStore }) {
  return { photoStore: photoStore };
}

export default connect(
  mapStateToProps,
  actions
)(Landing);
