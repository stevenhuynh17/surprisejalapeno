import React from 'react';
import ReactDOM from 'react-dom';
import NewsView from './NewsView.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // insert states
    };
  }

  componentDidMount() {
    // on load
  }

  // methods

  render() {
    return (
      <div>
        <h2>App here</h2>
        <div>
          <Search />
        </div>
        <div>
          <NewsView />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));