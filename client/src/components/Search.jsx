import React from 'react';
import Geosuggest from 'react-geosuggest';

const Search = (props) => (
  <div>
    <form onSubmit={props.handleSearchSubmit} >
      <span>Find news in <input type="text" placeholder="San Francisco" value={props.location} onChange={props.handleSearchChange} /></span>
    </form>
    <h3>Geosuggest test</h3>
    <Geosuggest />
  </div>
);

export default Search;