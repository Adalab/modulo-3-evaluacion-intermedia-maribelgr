import React from "react";
import pokemonInfo from "./data/pokemonInfo.json";
import PokeList from "./PokeList";
import "../stylesheets/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Mi lista de pokemon</h1>
        <PokeList data={pokemonInfo} />
      </div>
    );
  }
}

export default App;
