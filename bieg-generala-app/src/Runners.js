import React, { Component } from "react";
import Tabletop from "tabletop";

class Runners extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1hKeE7XttfUP5KdzgC5QJAB0rcXbzkeq3CBnujbLKpx0",
      callback: googleData => {
        this.setState({
          runners: googleData.Bieg.elements,
          walkers: googleData.NordicWalking.elements
        });
        this.renderTableHeader();
        this.renderTableData();
      },
      simpleSheet: false
    });
  }
  renderTableHeader(collectionName) {
    if (
      this.state[collectionName] == null ||
      this.state[collectionName].length === 0
    )
      return;
    let header = Object.keys(this.state[collectionName][0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData(collectionName) {
    if (
      this.state[collectionName] == null ||
      this.state[collectionName].length === 0
    )
      return;
    return this.state[collectionName].map((runner, index) => {
      const { Numer, Imie, Nazwisko, Miejscowosc, Klub } = runner; //destructuring
      return (
        <tr key={Numer}>
          <td>{Numer}</td>
          <td>{Imie}</td>
          <td>{Nazwisko}</td>
          <td>{Miejscowosc}</td>
          <td>{Klub}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="content-container">
        <div className="content">
          <h1>Lista uczestników biegu:</h1>
          <table id="runners">
            <tbody>
              <tr>{this.renderTableHeader("runners")}</tr>
              {this.renderTableData("runners")}
            </tbody>
          </table>
          <h1>Lista uczestników nordic walking:</h1>
          <table id="walkers">
            <tbody>
              <tr>{this.renderTableHeader("walkers")}</tr>
              {this.renderTableData("walkers")}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Runners.propTypes = {};

export default Runners;
//1hKeE7XttfUP5KdzgC5QJAB0rcXbzkeq3CBnujbLKpx0
//https://docs.google.com/spreadsheets/d/e/2PACX-1vRx4do1-HhA2OHP-wRIATGzBWIIhcQmfrFc8bS-mUyrM8Ajd0LAE6myIy4N6AtpLDyCL7P05tJeUOJB/pubhtml
