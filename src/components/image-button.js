import React from "react";
import PropTypes from "prop-types";
import "./image-button.css";

export default class ImageButton extends React.PureComponent {
  static propTypes = {
    altText: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  };

  handleOnClick = () => {
    const { onClick, imageSrc } = this.props;
    onClick(imageSrc);
  };

  render() {
    const { altText, imageSrc, isSelected } = this.props;
    return (
      <div className="col-sm image-button-container">
        <button
          className={
            "btn btn-outline-primary image-button-button " +
            (isSelected
              ? "image-button-button-selected"
              : "image-button-button-not-selected")
          }
          onClick={this.handleOnClick}
        >
          <img src={imageSrc} alt={altText} className="image-button-image" />
        </button>
      </div>
    );
  }
}
