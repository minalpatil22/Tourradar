import React from "react";
import axios from "axios";
import SearchContainer from "./SearchContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    axios
      .get("https://api.myjson.com/bins/18x6yt")
      .then(response =>
        this.setState({
          data: response.data
        })
      )
      .catch(error =>
        this.setState({
          error: error
        })
      );
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        Minal test
        <div className="container">
          {data.length ? <SearchContainer data={this.state.data} /> : ''}
        </div>
        <footer />
      </div>
    );
  }
}

export default App;
