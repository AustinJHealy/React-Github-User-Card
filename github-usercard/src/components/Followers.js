import React from "react";

class Followers extends React.Component {
  render() {
    return (
      <div className="Followers">
        {/* <p>{JSON.stringify(this.props)}</p> */}
        <h2>Followers:</h2>
        {this.props.followers.map((item) => {
          return <p>{item.login}</p>;
        })}
      </div>
    );
  }
}
export default Followers;
