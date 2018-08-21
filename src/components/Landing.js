import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Landing extends Component {
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
          <div className="card-image">
            <img src={thumbnailUrl} />
            <span className="card-title">{title}</span>
          </div>
          <div className="card-action">
            <Link to="/photo">Check Details</Link>
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

    return this.renderCards(photos);
  }
}

function mapStateToProps({ photos }) {
  return { photos };
}

export default connect(mapStateToProps)(Landing);
