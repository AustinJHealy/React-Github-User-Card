import React from "react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.userdata;
    console.log(this.props);
  }

  render() {
    return (
      <div className="UserCard">
        <img src={this.state.avatar_url} alt={Date.now()} />
        <p>{this.state.name}</p>
        <p>{this.state.bio}</p>
        <p>
          Followers: {this.state.followers} Following: {this.state.following}
        </p>
        <a href={this.state.html_url}>Github</a>
      </div>
    );
  }
}
export default UserCard;
