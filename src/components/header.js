import React from "react";
import HeaderImage from "../title.png";
import "./header.css";

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className="container header-container">
        <img src={HeaderImage} className="img-fluid" alt="Jar jar newsfeed" />
      </div>
    );
  }
}
