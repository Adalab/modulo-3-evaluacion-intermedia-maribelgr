import React from "react";
import pokemonInfo from "../data/pokemonInfo.json";
import PokeList from "./PokeList";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: pokemonInfo,
    };
  }
  render() {
    return (
      <div className="main-container">
        <h1>Mi lista de pokemon</h1>
        <PokeList data={this.state.data} />
      </div>
    );
  }
}

export default App;
