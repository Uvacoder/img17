import React from "react";
import Icons from "./Icons";
import pic from "./canadian-wanderlust.jpg";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <img src={pic}/>
        <p>
          3166-A
          <br />
          Sector 48D
          <br />
          Chandigarh
          <br />
          160047
          <br />
          ph.No: 7307371331
        </p>
        <Icons />
      </div>
    );
  }
}

export default Contact;
