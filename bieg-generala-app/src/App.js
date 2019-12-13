import "./index.css";
import Navigation from "./Nav";
import Home from "./Home";
import Runners from "./Runners";
import Results from "./Results";
import Rules from "./Rules";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <Navigation />
          <Route path="/" exact render={props => <Home />} />
          <Route path="/Runners" exact render={props => <Runners />} />
          <Route path="/Results" exact render={props => <Results />} />
          <Route path="/Rules" exact render={props => <Rules />} />
        </div>
      </Router>
    );
  }
}

export default App;
