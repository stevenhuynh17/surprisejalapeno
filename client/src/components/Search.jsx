import React from 'react';
import Geosuggest from 'react-geosuggest';

const Search = (props) => (
  <div>
    <h2>Find news in:</h2>
    <Geosuggest
      placeholder="San Francisco"
      onSuggestSelect={props.handleSuggestionSelect}
      // location={new google.maps.LatLng(37.773972, -122.431297)}
      // radius="20"
    />
  </div>
);

export default Search;