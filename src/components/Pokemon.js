import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const typesList = this.props.types.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return (
      <div>
        <img src={this.props.url} alt={this.props.name} />
        <h2>{this.props.name}</h2>
        <ul>{typesList}</ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
};

export default Pokemon;
