import React, { Component } from "react";
import { connect } from "react-redux";

class Photo extends Component {
  render() {
    if (!this.props.photos) {
      return <div>Loading</div>;
    }
    const { photos, activePhoto } = this.props.photos;

    const photoData = photos[activePhoto];
    const { title, url } = photoData;
    return (
      <div key={activePhoto} className="col s8 m8">
        <div className="card">
          <div className="card-image">
            <img src={url} />
          </div>
          <div className="card-content">
            <p>{title}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ photos }) {
  return {
    photos: photos
  };
}
export default connect(mapStateToProps)(Photo);
