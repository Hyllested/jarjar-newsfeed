import React from "react";
import PropTypes from "prop-types";
import dark from "../dark_light_saber.png";
import light from "../light_light_saber.png";

export default class AddReactions extends React.PureComponent {
  static propsTypes = {
    handleAddReaction: PropTypes.func.isRequired,
    goodReactions: PropTypes.number.isRequired,
    badReactions: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  };

  render() {
    const { badReactions, goodReactions, handleAddReaction, id } = this.props;
    return (
      <div>
        <button
          className="btn btn-outline-success"
          onClick={() => handleAddReaction("good", id)}
          style={{ height: 38, marginRight: 10 }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={light} alt="good" style={{ height: 20, width: 20 }} />
            <p style={{ paddingLeft: 10 }}>{goodReactions}</p>
          </div>
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => handleAddReaction("bad", id)}
          style={{ height: 38 }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={dark} alt="bad" style={{ height: 20, width: 20 }} />
            <p style={{ paddingLeft: 10 }}>{badReactions}</p>
          </div>
        </button>
      </div>
    );
  }
}
