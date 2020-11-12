import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const list = this.props.data.map((item) => {
      return (
        <li>
          <Pokemon url={item.url} name={item.name} types={item.types} />
        </li>
      );
    });
    return <ul>{list}</ul>;
  }
}

export default PokeList;
