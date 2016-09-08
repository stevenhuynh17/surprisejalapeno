import React from 'react';
import Geosuggest from 'react-geosuggest';

const Search = (props) => (
  <div>
    <form onSubmit={props.handleSearchSubmit} >
      <span>Find news in <input type="text" placeholder="San Francisco" value={props.location} onChange={props.handleSearchChange} /></span>
    </form>
    <Geosuggest
      placeholder="San Francisco"
      location={new google.maps.LatLng(37.773972, -122.431297)}
      onSuggestSelect={props.handleSuggestionSelect}
      radius="20" />
  </div>
);

export default Search;