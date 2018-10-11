import React from "react";
import Janne from "./Janne";
import Router from "./Router";
import NotFound from "./NotFound";
import Kattla from "./Kattla";
class App extends React.Component {
  handleSubmit = () => this.props.history.push("/kaffe/Janne");
  /*handleSubmit1 = () => this.props.history.push("/kaffe/Kattla");*/
  render() {
    const name = "Jesper";
    const name2 = "Janne";
    const name3 = "Kattla";

    return (
      <form className="kaffe" onSubmit={this.handleSubmit}>
        <h3>
          Välkommen till din dröm, {name}, känner du dig som en {name3} får du
          gå hem. Alla {name2} får ta en redishe kaffe.
        </h3>
        <button type="submit">Janne?</button>
        <form className="kattla" onSubmit={this.handleSubmit1}>
          <button type="submit">Kattla?</button>
        </form>
      </form>
    );
    console.log(name);
  }
}

export default App;
