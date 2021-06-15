import React from "react";
import landscape from "./landscape.jpg";
import kids from "./kids.jpeg";
import maternity from "./maternity.jpeg";
import potrait from "./potrait.jpeg";
import wedding from "./wedding.jpeg";
import monochrome from "./monochrome.jpeg";

class Gallery extends React.Component {
  render() {
    return (
      <div className="Gallery">
        <div className="row">
          <img className="thumbnail" src={landscape} alt="landscape" />
          <img className="thumbnail" src={kids} alt="kids" />
          <img className="thumbnail" src={maternity} alt="maternity" />
        </div>
        <div className="caption">
          <p>Landscape</p>
          <p>Kids</p>
          <p>Maternity</p>
        </div>
        <div className="row">
          <img className="thumbnail" src={wedding} alt="wedding" />
          <img className="thumbnail" src={monochrome} alt="monochrome" />
          <img className="thumbnail" src={potrait} alt="potrait" />
        </div>
        <div className="caption">
          <p>Wedding</p>
          <p>Monochrome</p>
          <p>Potrait</p>
        </div>
      </div>
    );
  }
}

export default Gallery;
