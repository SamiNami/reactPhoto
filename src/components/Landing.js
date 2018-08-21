import React, { Component } from "react";
import { connect } from "react-redux";

class Landing extends Component {
  renderCards(photos) {
    return Object.keys(photos).map(key => {
      const photoData = photos[key];
      const { thumbnailUrl, title } = photoData;
      return (
        <div key={key} className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={thumbnailUrl} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { photos } = this.props;
    if (!photos) {
      return <div>Loading</div>;
    }

    return this.renderCards(photos);
  }
}

function mapStateToProps({ photos }) {
  return { photos };
}

export default connect(mapStateToProps)(Landing);
