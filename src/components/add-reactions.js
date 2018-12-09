import React from "react";
import PropTypes from "prop-types";
import dark from "../dark_light_saber.png";
import light from "../light_light_saber.png";
import "./add-reactions.css";

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
          className="btn btn-outline-success add-reactions-good-button"
          onClick={() => handleAddReaction("good", id)}
        >
          <div className="add-reactions-button-content">
            <img
              src={light}
              alt="good"
              className="add-reactions-button-image"
            />
            <p className="add-reactions-button-text">{goodReactions}</p>
          </div>
        </button>
        <button
          className="btn btn-outline-danger add-reactions-bad-button"
          onClick={() => handleAddReaction("bad", id)}
        >
          <div className="add-reactions-button-content">
            <img src={dark} alt="bad" className="add-reactions-button-image" />
            <p className="add-reactions-button-text">{badReactions}</p>
          </div>
        </button>
      </div>
    );
  }
}
