import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  //state = {  }
  render() {
    //console.log(this.props);
    return this.props.movies.map((movie) => {
      return <Movie movie={movie} />;
    });
  }
}

export default Movies;
