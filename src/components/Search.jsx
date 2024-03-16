import React, { Component } from "react";

class Search extends Component {
  //state = {  }
  render() {
    const { onSearchInput } = this.props;

    return (
      <div>
        <form>
          <label for="search">Search</label>
          <input
            onInput={onSearchInput}
            type="text"
            id="search"
            name="search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
