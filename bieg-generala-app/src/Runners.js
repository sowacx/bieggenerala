import React, { Component } from "react";
import Tabletop from "tabletop";
import { useTable, useSortBy } from "react-table";

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </>
  );
}

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

  columns = [
    {
      Header: "First Name",
      accessor: "firstName"
    },
    {
      Header: "Last Name",
      accessor: "lastName"
    }
  ];

  data = [];

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
          <Table columns={this.columns} data={this.data} />
        </div>
      </div>
    );
  }
}

Runners.propTypes = {};

export default Runners;
//1hKeE7XttfUP5KdzgC5QJAB0rcXbzkeq3CBnujbLKpx0
//https://docs.google.com/spreadsheets/d/e/2PACX-1vRx4do1-HhA2OHP-wRIATGzBWIIhcQmfrFc8bS-mUyrM8Ajd0LAE6myIy4N6AtpLDyCL7P05tJeUOJB/pubhtml
