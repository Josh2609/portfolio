import React from "react"
import Img from "gatsby-image"
import "./cover.css"

const Cover = ({ data }) => (
  <div id="#top" className="cover">
    <Img
      title="Cover image"
      alt="Air Balloon in Nature"
      sizes={data.childImageSharp.sizes}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    />
    <div className="center">
      <h1 className="name">HI, I'M JOSH</h1>
      <p className="greeting">I'm a etc...</p>
    </div>
  </div>
)

export default Cover
