import React from "react";
import Router from "./Router";
class Janne extends React.Component {
  handleSubmit = () => this.props.history.push("/");

  render() {
    return (
      <form className="back" onSubmit={this.handleSubmit}>
        <h2>
          Välkommen. Här finns det absolut inte mer att läsa än just välkommen.
        </h2>
        <button type="Submit">Bakåt</button>
      </form>
    );
  }
}

export default Janne;
