import React from "react";
import Icons from "./Icons";
import pic from "./CEDD6BA6-1998-4AAC-B206-6E416C4DA27B.webp";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <img src={pic} alt="" />
        <div className='address'>
          <p>
            Ivy Rd
            <br />
            Ivy
            <br />
            Virginia
            <br />
            22901
            <br />
            ph.No: 1-434-978-1691
          </p>
          <Icons />
        </div>
      </div>
    );
  }
}

export default Contact;
