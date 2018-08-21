import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
// const Header = () => <h2>Header</h2>;
const Landing = () => <h2>Landing</h2>;
const Photo = () => <h2>Photo</h2>;

const App = () => {
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
};

export default App;
