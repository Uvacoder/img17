import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ImageViewer } from "./ImageViewer";

class App extends React.Component {
 
  render() {
    return (
      <Router>
        <div className="App">
          <div className='header'>
            <h1 className="name">Helen Ward</h1>
            <SideBar />
          </div>
          <div className='container'>
          <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={ImageViewer} />
            </Switch>
          </div>
          </div>
      </Router>
    );
  }
}

export default App;
