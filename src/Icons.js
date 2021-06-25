import { FaInstagramSquare } from "react-icons/fa";
import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";

class Icons extends React.Component {
  render() {
    return (
      <div className="Icons">
        <a
          href="https://www.instagram.com/soniyasadath_photography/?utm_medium=copy_link"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare size="2.1em" className="icon"/>
        </a>
        <a href="https://www.facebook.com/soniyaugin" target="_blank" rel="noreferrer">
          <GrFacebook size="2em" className="icon" />
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
          <FiTwitter size="2em" className="icon" />{" "}
        </a>
      </div>
    );
  }
}

export default Icons;
