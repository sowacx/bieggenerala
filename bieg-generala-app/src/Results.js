import React, { Component } from "react";
import Tabletop from "tabletop";
import { useTable, useSortBy, useFilters } from "react-table";

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  return (
    <input
      value={filterValue || ""}
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Wyszukaj`}
    />
  );
}

function Table({ columns, data }) {
  const filterTypes = {
    text: (rows, id, filterValue) => {
      return rows.filter(row => {
        const rowValue = row.values[id];
        return rowValue !== undefined
          ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
          : true;
      });
    }
  };

  const defaultColumn = {
    // Let's set up our default Filter UI
    Filter: DefaultColumnFilter
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes
    },
    useFilters,
    useSortBy
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps()}>
                  <span {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
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
    </>
  );
}
class Results extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      columns: [],
      runners: null,
      walkers: null
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1UdU_Y4VGsb_l3Q5pqi1yWuK7Lbw8u8qfF7D5ofTwzuo",
      callback: googleData => {
        console.log(googleData.Bieg);
        googleData.Bieg.headers = this.setHeaders(googleData.Bieg.columnNames);
        googleData.NordicWalking.headers = this.setHeaders(
          googleData.NordicWalking.columnNames
        );
        this.setState({
          runners: googleData.Bieg,
          walkers: googleData.NordicWalking
        });
      },
      simpleSheet: false
    });
  }
  setHeaders(columns) {
    var headers = [];
    columns.forEach(function(col) {
      headers.push({ Header: col, accessor: col });
    });
    return headers;
  }

  columns = [];

  data = [];

  render() {
    let tableRunners;
    let tableWalkers;
    if (this.state.runners)
      tableRunners = (
        <Table
          columns={this.state.runners.headers}
          defaultSorted={[
            {
              id: "Dystans",
              desc: true
            },
            {
              id: "Czas",
              desc: false
            }
          ]}
          data={this.state.runners.elements}
        />
      );

    if (this.state.walkers)
      tableWalkers = (
        <Table
          columns={this.state.walkers.headers}
          data={this.state.walkers.elements}
        />
      );

    return (
      <div className="content-container">
        <div className="content content-runners">
          <h1>Wyniki biegu:</h1>
          {tableRunners}
          <h1>Wyniki nordic walking:</h1>
          {tableWalkers}
        </div>
      </div>
    );
  }
}

Results.propTypes = {};

export default Results;
