import React from "react";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
  render() {
    return (
      <div className="Side-bar">
        <ul className="nav">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default SideBar;
