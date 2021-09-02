import React from "react";
import profilePic from './profilepic.jpeg';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <img src={profilePic} alt="" />
        <p>
          {" "}
          I'm Helen Ward. An artist and Photographer.I love everything{" "}
          <br />
          creative in life, importantly photography.I love capturing laughter,
          <br />
          giggles and lovely memories!. I offer newborn, family, couples,
          maternity,
        </p>
      </div>
    );
  }
}

export default About;
