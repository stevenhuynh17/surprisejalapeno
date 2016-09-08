import React from 'react';

const Search = (props) => (
  <div>
    <form onSubmit={props.handleSearchSubmit} >
      <span>Find news in <input type="text" placeholder="San Francisco" value={props.location} onChange={props.handleSearchChange} /></span>
    </form>
  </div>
);

export default Search;