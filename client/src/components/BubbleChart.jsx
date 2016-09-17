// bubble chart JSX

import React from 'react';
import ReactBubbleChart from 'react-bubble-chart';

let idCounter = 0;

const getID = () => {
  idCounter++;
  const stringID = idCounter.toString();
  return stringID;
};

const border = {
  // border: '10px solid hsla(120,100%,50%,0.3)'
  border: '#0000FF'
};

console.log('INSIDE BUBBLECHART');
const BubbleChart = ({ data, handleClick, colors }) => (
  <ReactBubbleChart
    colorLegend={colors}          // this renders everything black if undefined
    legend={false}                     // if true, create and show a legend based on the passed colors
    selectedColor="#737373"            // for when bubble is 'selected'
    selectedTextColor="#d9d9d9"        // for when bubble is 'selected'
    // fixedDomain={{ min: 0, max: 3 }}   // works with color legend - see react-bubble-chart docs
    onClick={handleClick}              // NEED TO SET CLICK HANDLER HERE FOR OPENING NEWS URL:  onClick={}
    data={
      data.map(d => ({
        _id: getID(),           // string, unique id (required) --> we didn't have this before React
        value: d.rating,             // number, to determine relative size of bubbles (required)
        colorValue: d.newsCategory,  // number, used to determine color
        selected: d.selected,        // boolean, uses selectedColor above for bubble if true
        url: d.url,                  // string, url for the article
        displayText: <img src={d.image} alt="bubble" />
      }))
    }
  />
);

BubbleChart.propTypes = {
  data: React.PropTypes.array,
  handleClick: React.PropTypes.func
};

export default BubbleChart;
