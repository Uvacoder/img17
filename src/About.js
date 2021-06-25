import React from "react";
import profilePic from './profilepic.jpeg';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <img src={profilePic}/>
        <p>
          {" "}
          I am a Chandigarh based Malayalee Photographer.I love everything{" "}
          <br />
          creative in life, importantly photography.I love capturing laughter,
          <br />
          giggles and lovely memories!. I offer newborn, family, couples,
          maternity,
          <br />
          potrait and event photography. If you are looking to capture some
          special
          <br />
          memories drop me a line!
        </p>
      </div>
    );
  }
}

export default About;
