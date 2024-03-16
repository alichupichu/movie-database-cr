import React, { Component } from "react";

class About extends Component {
  //state = { }
  render() {
    const {
      original_title,
      original_language,
      overview,
      release_date,
      poster_path,
      popularity,
    } = this.props.movie;
    return (
      <div className="film-card about">
        <div className="text">
          <h2 className="title-movie">{original_title}</h2>
          <p className="description">{overview}</p>
          <p>Language: {original_language}</p>
          <p>Release date: {new Date(release_date).toDateString()}</p>
        </div>
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
          />
        </div>
      </div>
    );
  }
}

export default About;
