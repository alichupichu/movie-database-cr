import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Movies from "./Movies";

class Interface extends Component {
  state = {};

  //this function mounts and then gets movies
  async componentDidMount() {
    this.getMovies("future");
  }

  //the function that (actually gets mvies) asynchronously loads the data from the API will be repeatedly used so we are going to store it in the function below for reaptead use (ojo! it used to live abpve inside "componentDidMount")

  getMovies = async (searchTerm) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchTerm}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGQ2YjFmOGE4ZmM2ZGJmOGU0YWY0M2U3MzBhNDY2MSIsInN1YiI6IjY0Nzc4OGJhOTM4MjhlMDBiZjljOTkwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5PaH_RToi9pI0GJ_K_BtR3PlwJiScoFClmEfUqXuUzo`,
        },
      }
    );
    this.setState({ movies: data.results });
  };

  //this function stores in the state what they type in the search box
  onSearchInput = (e) => {
    this.getMovies(e.target.value);
  };
  render() {
    const { movies } = this.state;
    //console log that checks the app gets the data in the console
    //console.log(this.state);
    return (
      <>
        <Search onSearchInput={this.onSearchInput} />
        {/* Conditionally rendered bellow until only when we get movies. */}
        {/* this is how it used to be written until we deconstructed with the movies const {this.state.movies && <Movies movies={this.state.movies} />} */}
        {movies && <Movies movies={movies} />}
      </>
    );
  }
}

export default Interface;
