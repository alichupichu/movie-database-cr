import React, { Component } from "react";
import About from "./About";

class Movie extends Component {
  //state = {  }
  render() {
    console.log(this.props);
    return (
      <div className="movie">
        <About movie={this.props.movie} />
      </div>
    );
  }
}

export default Movie;
