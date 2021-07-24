import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return <div>{this.renderMovies()}</div>;
  }
  renderMovies() {
    let { movies } = this.state;
    if (movies.length === 0)
      return <span className="bg-warning">no movies found</span>;
    return (
      <React.Fragment>
        <span className="bg-info m-2">
          there are {this.state.movies.length} records
        </span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  deleteMovie(id) {
    let movies = this.state.movies.filter((m) => m._id != id);
    this.setState({ movies: movies });
  }
}

export default Movies;
