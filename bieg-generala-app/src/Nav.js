import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./img/herb.png";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo}></img>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">O biegu</Link>
              </li>
              <li>
                <Link to="/Runners">Uczestincy</Link>
              </li>
              <li>
                <Link to="/Results">Wyniki</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
