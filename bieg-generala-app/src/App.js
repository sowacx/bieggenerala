import "./index.css";
import Nav from "./Nav";
import Home from "./Home";
import Runners from "./Runners";
import Results from "./Results";
import Rules from "./Rules";
import React, { Component } from "react";
import { Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="body">
                <Nav />
                <Route path="/" exact render={props => <Home />} />
                <Route path="/Runners" exact render={props => <Runners />} />
                <Route path="/Results" exact render={props => <Results />} />
                <Route path="/Rules" exact render={props => <Rules />} />
            </div>
        );
    }
}

export default App;
