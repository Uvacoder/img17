import { FaInstagramSquare } from "react-icons/fa";
import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";

class Icons extends React.Component {
  render() {
    return (
      <div className="Icons">
        <FaInstagramSquare size="2.1em" className="icon" />
        <GrFacebook size="2em" className="icon" />
        <FiTwitter size="2em" className="icon" />
      </div>
    );
  }
}

export default Icons;
