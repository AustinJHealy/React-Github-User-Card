import React from "react";
import axios from "axios";
import CardContainer from "./components/CardContainer";
import Followers from "./components/Followers";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: []
    };
  }
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/AustinJHealy/followers`)
      .then((res) => this.setState({followers: res.data}))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <CardContainer />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
