import React from 'react';
import ReactDOM from 'react-dom';
import NewsView from './NewsView.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'San Francisco'
    };
  }

  componentDidMount() {
    // on load
  }

  onSearchSubmit (e) {
    e.preventDefault();
    this.setState({location: e.target.value});
  }

  getNewsByLocation (loc) {
    $.ajax({
      method: 'POST',
      url: '/news',
      dataType: 'json',
      data: loc,
      success: (data) => (
        // plug into D3
      ),
      error: (err) => (
        console.log('getNews err ', err);
      )
    })
  }

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