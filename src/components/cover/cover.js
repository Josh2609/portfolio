import React from "react";
import Img from "gatsby-image";
import "./cover.css";

const Cover = ({ data }) => (
  <div id="#top" className="cover animated">
    <Img
      title="Cover image"
      alt="Air Balloon in Nature"
      sizes={data.childImageSharp.sizes}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }}
    />
    <div className="overlay" />
    <div className="center">
      <h1 className="name">
        <b style={{fontFamily:"Work Sans"}}>HI, I'M JOSH</b>
      </h1>
      <p className="greetings">I'm a etc...</p>
    </div>
  </div>
);

export default Cover;