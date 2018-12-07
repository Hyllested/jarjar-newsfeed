import React from "react";
import HeaderImage from "../title.png";

export default class Header extends React.PureComponent {
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "black",
          borderRadius: 4,
          paddingTop: 25,
          paddingBottom: 25,
          borderWidth: 2,
          borderColor: "white",
          border: "solid",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={HeaderImage} className="img-fluid" alt="Jar jar newsfeed" />
      </div>
    );
  }
}
