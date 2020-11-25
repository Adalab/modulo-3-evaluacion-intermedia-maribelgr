import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

class PokeList extends React.Component {
  render() {
    const list = this.props.data.map((item) => {
      return (
        <li className="poke-list" key={item.id}>
          <Pokemon url={item.url} name={item.name} types={item.types} />
        </li>
      );
    });
    return <ul className="poke-list-container">{list}</ul>;
  }
}

PokeList.propTypes = {
  data: PropTypes.array,
};

export default PokeList;
