import React, { Component } from "react";
import NavBar from "./copmonents/Navbar/Navbar.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Background from "./copmonents/Background/Background.jsx";
import TimeLine from "./copmonents/TimeLine/TimeLine.jsx";
import Footer from "./copmonents/Footer/Footer.jsx";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <header>{/* <NavBar/> */}</header>
        <body>
          <Background/>
          <TimeLine />

          
        </body>
        <footer>
          <Footer />
        </footer>
        
      </div>
    );
  }
}

export default App;
