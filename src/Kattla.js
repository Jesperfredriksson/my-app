import React from "react";
import Router from "./Router";
class Kattla extends React.Component {
  handleSubmit = () => this.props.history.push("/");

  render() {
    return (
      <form className="back" onSubmit={this.handleSubmit}>
        <h2>Välkommen.</h2>
        <button type="Submit">Bakåt</button>
      </form>
    );
  }
}

export default Kattla;
