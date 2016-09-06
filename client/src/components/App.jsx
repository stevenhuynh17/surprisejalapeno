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
          <DataView />
        </div>
      </div>
    );
  }
}

window.App = App;