import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={"/"} className="brand-logo center">
            Photo Collection
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
