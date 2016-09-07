import React from 'react';

const Search = (props) => (
  <div>
    <span>Find news in <input type="text" defaultValue="San Francisco" />
    <button onSubmit={() => {props.onSearchSubmit(e)}}>Go</button></span>
  </div>
);

export default Search;