import "./index.css";
import Nav from "./Nav";
import Home from "./Home";
import Runners from "./Runners";
import Results from "./Results";
import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body">
        <Nav />
        <Route path="/" exact render={props => <Home />} />
        <Route path="/Runners" exact render={props => <Runners />} />
        <Route path="/Results" exact render={props => <Results />} />
      </div>
    );
  }
}

export default App;
