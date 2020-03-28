import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";
import ErrorBoundary from "./common/errorBoundary";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <ErrorBoundary>
          <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        </ErrorBoundary>
      )
    },
    {
      key: "delete",
      content: movie => {
        if (this.props.isAdmin) {
          return (
            <button
              onClick={() => this.props.onDelete(movie)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          );
        }

        return null;
      }
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
