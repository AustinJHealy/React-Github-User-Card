import React from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

class CardContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    console.log("componentDidMount running");
    axios
      .get("https://api.github.com/users/AustinJHealy")
      .then((res) => {
        console.log(res);
        this.setState(res.data);
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="CardContainer">
        <UserCard key={Date.now()} userdata={this.state} />
      </div>
    );
  }
}
export default CardContainer;
