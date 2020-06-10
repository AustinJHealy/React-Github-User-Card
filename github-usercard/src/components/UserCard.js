import React from "react";
import styled from "styled-components";

class UserCard extends React.Component {

  
  
  render() {
    const Paragraph = styled.p`
      color: red;
      border: 5px solid gray;
      font-size: 2rem;
      font-family: Tahoma, Geneva, sans-serif;
      border-radius: 10px;
      margin: 2%;
      padding: 1%;
    `;
    const Image = styled.img`
      border: 20px solid lightgreen;
      border-radius: 30px;
    `;
    const Container = styled.div`
      border: 5px dashed black;
      border-radius: 30px;
    `;
    const Heading = styled.h1`
      font-size: 2.5rem;
    `;
    return (
      <Container className="UserCard">
        <Image src={this.props.userdata.avatar_url} alt={Date.now()} />
        <Heading>{this.props.userdata.name}</Heading>
        <Paragraph>{this.props.userdata.bio}</Paragraph>
        <Paragraph>
          Followers:{" "}
          <a href={this.props.userdata.followers_url}>
            {this.props.userdata.followers}
          </a>{" "}
          Following:
          <a href={this.props.userdata.following_url}>
            {this.props.userdata.following}
          </a>
        </Paragraph>
        <a href={this.props.userdata.html_url}>Github Profile</a>
      </Container>
    );
  }
}
export default UserCard;
