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

  handleOnGoodClick = () => {
    const { handleAddReaction, id } = this.props;
    handleAddReaction("good", id);
  };

  handleOnBadClick = () => {
    const { handleAddReaction, id } = this.props;
    handleAddReaction("bad", id);
  };

  render() {
    const { badReactions, goodReactions } = this.props;
    return (
      <div>
        <button
          className="btn btn-outline-success add-reactions-good-button"
          onClick={this.handleOnGoodClick}
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
          onClick={this.handleOnBadClick}
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
