import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import { connect } from "react-redux";
import * as actions from "../actions";

const Photo = () => <h2>Photo</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/photo" component={Photo} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
