// Testing123
import React from 'react';
import ReactDOM from 'react-dom';
// import rd3 from 'react-d3-library';

import Search from './Search.jsx';
import BubbleChart from './BubbleChart.jsx';
// import NationalMap from './NationalMap.jsx'; // NODE FILE

// const USA = rd3.Component;

// EXAMPLE FOR TESTING //
// const dummyData = [
//   {
//     storyName: 'example storyname 1',
//     url: 'https://www.google.com/',
//     rating: 22,
//     newsCategory: 1,
//     sentimentScore: -1
//   },
//   {
//     storyName: 'example storyname 2',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 2,
//     sentimentScore: -0.75
//   },
//   {
//     storyName: 'example storyname 3',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 4,
//     sentimentScore: -0.50
//   },
//   {
//     storyName: 'example storyname 4',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 3,
//     sentimentScore: -0.25
//   },
//   {
//     storyName: 'example storyname 5',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1,
//     sentimentScore: 0
//   },
//   {
//     storyName: 'example storyname 6',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1,
//     sentimentScore: 0.25
//   },
//   {
//     storyName: 'example storyname 7',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 2,
//     sentimentScore: 0.50
//   },
//   {
//     storyName: 'example storyname 8',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1,
//     sentimentScore: 0.75
//   },
//   {
//     storyName: 'example storyname 9',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1,
//     sentimentScore: 1
//   },
//   {
//     storyName: 'example storyname 14',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 2
//   },
//   {
//     storyName: 'example storyname 24',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1
//   },
//   {
//     storyName: 'example storyname 34',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1
//   },
//   {
//     storyName: 'example storyname 44',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1
//   },
//   {
//     storyName: 'example storyname 54',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1
//   },
//   {
//     storyName: 'example storyname 64',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1
//   },
//   {
//     storyName: 'example storyname 74',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1
//   },
//   {
//     storyName: 'example storyname 84',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1
//   },
//   {
//     storyName: 'example storyname 94',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1
//   },
//   {
//     storyName: 'example storyname 64',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1
//   },
//   {
//     storyName: 'example storyname 74',
//     url: 'https://www.google.com/',
//     rating: 14,
//     newsCategory: 1
//   }
// ];

const colorLegend = [
  // COLOR SCALE EXAMPLE - WILL UPDATE
  // reds from dark to light
  { color: '#ff291f', textColor: '#fee0d2', text: 'Negative' },
  { color: '#cb181d', textColor: '#fee0d2' },
  '#fb6a4a',
  '#fcbba1',
  // neutral grey
  { color: '#b0b6aa', text: 'Neutral' },
  // // blues from light to dark
  '#c6dbef',
  '#6baed6',
  { color: '#2171b5', textColor: '#deebf7' },
  { color: '#08306b', textColor: '#deebf7', text: 'Positive' }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    // //////start testing//////////
    // to assign a random category (will come from db later)
    // const getCategory = () => Math.floor(Math.random() * 4);

    // // to assign a random rating (will come from db later)
    // const getRating = () => {
    //   const ratings = [4, 6, 8, 10, 11, 8, 20];
    //   const rating = ratings[Math.floor(Math.random() * ratings.length)];
    //   return rating;
    // };

    // console.log(getRating());

    const moodFactor = (obj) => {
      const sentimentLevel = {
        '-1': 0,
        '-0.75': 1,
        '-0.50': 2,
        '-0.25': 3,
        0: 4,
        0.25: 5,
        0.50: 6,
        0.75: 7,
        1: 8
      };
      if (obj.sentimentScore) {
        return sentimentLevel[obj.sentimentScore];
      }
      return sentimentLevel[0];
    };

    // iterate through story objects and assign random category and rating
    // dummyData.forEach((storyObj) => {
    //   const testObj = storyObj;
    //   const category1 = getCategory();
    //   const rating = getRating();
    //   const score = moodFactor(storyObj);
    //   testObj.newsCategory = category1;
    //   testObj.rating = rating;
    //   testObj.sentimentScore = score;
    // });
    // /////end testing///////////

    this.state = {
      location: '',
      // remember to change back to empty array after done using dummy data
      data: [],
      numBubbles: 0,
      d3: ''
    };

    console.log(this.state.data);
    // this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSuggestionSelect = this.handleSuggestionSelect.bind(this);
    this.getNewsByLocation = this.getNewsByLocation.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.setState({ d3: NationalMap });
  // }


  // STEP 2: Make the AJAX call.
  getNewsByLocation(loc) {
    console.log('inside getNewsByLocation');
    console.log('location: ', loc);
    // this.setState({ data, numBubbles: data.length });
    // const query = loc.split(' ').join('+');
    // console.log('joined query: ', query);
    // const encoded = encodeURIComponent(query);
    // console.log('encoded: ', encoded);
    /* global $ */
    const locObj = JSON.stringify(loc);

    $.ajax({
      method: 'GET',
      url: '/query',
      dataType: 'json',
      data: { q: locObj },
      success: (data) => {
        // data = dummyData; //FOR TESTING - NEED TO REMOVE THIS LINE
        console.log('YOU MADE A SUCCESSFUL API CALL');
        console.log('DATA RECEIVED, HERE YOU GO: ', data);
        // to assign a random category (will come from db later)

        // to assign a random rating (will come from db later)
        const getRating = () => {
          const ratings = [4, 6, 8, 10, 11, 8, 20];
          const rating = ratings[Math.floor(Math.random() * ratings.length)];
          return rating;
        };

        // iterate through story objects and assign random category and rating
        data.forEach((storyObj) => {
          const rating = getRating();
          storyObj.rating = rating;
        });

        data = data.splice(0, 12);

        // changed from data.value
        console.log('AMOUNT OF BUBBLES: ', data.length);
        this.setState({ data, numBubbles: data.length });
      },

      error: (err) => {
        console.log('getNews err ', err);
      }
    });
  }

  // STEP 1: changes state to location that was typed in. Invoke getNewsByLocation;
  handleSuggestionSelect(e) {
    console.log('selection e:', e);
    const loc = e.label;
    this.setState({ location: loc });
    this.getNewsByLocation(e);
  }


  // Possible redundant code --> It is getting passed down to submit
    // But it is never being called
  // handleSearchSubmit(e) {
  //   console.log('inside handleSearchSubmit');
  //   e.preventDefault();
  //   const location = this.state.location;
  //   if (!location) {
  //     return;
  //   }

  //   this.getNewsByLocation(location);
  // }

  handleSearchChange(e) {
    console.log('inside handleSearchChange');
    e.preventDefault();
    this.setState({ location: e.target.value });
  }

  handleClick(d) {
    console.log('inside handleClick, d:', d);
    window.open(d.url);
  }

  // handleSuggestionSelect gets invoked!!!
  render() {
    return (
      <div>
        <div>
          <section>
            <Search
              props={this.props}
              handleSearchChange={this.handleSearchChange}
              handleSearchSubmit={this.handleSearchSubmit}
              handleSuggestionSelect={this.handleSuggestionSelect}
            />
          </section>
          <section>
            <BubbleChart data={this.state.data} handleClick={this.handleClick} colors={colorLegend} />
          </section>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
