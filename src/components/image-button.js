import React from "react";
import PropTypes from "prop-types";

export default class ImageButton extends React.PureComponent {
  static propTypes = {
    altText: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  };

  render() {
    const { altText, imageSrc, onClick, isSelected } = this.props;
    return (
      <div
        className="col-sm"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          className="btn btn-outline-primary"
          style={{
            backgroundColor: isSelected ? "#212529" : "white",
            borderColor: isSelected ? "#212529" : "#ced4da",
            borderWidth: 1,
            padding: 5
          }}
          onClick={onClick}
        >
          <img
            src={imageSrc}
            alt={altText}
            style={{ height: 50, width: 50, borderRadius: 4 }}
          />
        </button>
      </div>
    );
  }
}
