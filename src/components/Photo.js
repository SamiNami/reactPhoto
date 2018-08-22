import React, { Component } from "react";
import { connect } from "react-redux";

class Photo extends Component {
  renderPhoto({ title, url }) {
    return (
      <div className="row">
        <div key={title} className="col offset-s2 offset-m2 s8 m8 ">
          <div className="card">
            <div className="card-image">
              <img src={url} />
            </div>
            <div className="card-content">
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.photoStore) {
      return <div>Loading</div>;
    }
    const { photos, activePhoto } = this.props.photoStore;
    const photoData = photos[activePhoto];
    return this.renderPhoto(photoData);
  }
}

function mapStateToProps({ photoStore }) {
  return {
    photoStore: photoStore
  };
}
export default connect(mapStateToProps)(Photo);
