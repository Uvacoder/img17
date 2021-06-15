import React from "react";
import "./App.css";
import image from "./canadian-wanderlust.jpg";
import SideBar from "./SideBar";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  displayAbout = () => {
    this.setState({
      displayAboutPage: true,
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <img className="profile-pic" alt="profile" src={image}></img>
          <div className="middle">
            <h1 className="name">Soniya Sadath</h1>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Gallery} />
            </Switch>
          </div>
          <SideBar />
        </div>
      </Router>
    );
  }
}

export default App;
