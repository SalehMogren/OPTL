import React, { Component } from "react";
import "./../../App.css";
import ReactDOM from "react-dom";

// NavBar components

class Navbutton extends React.Component {

  render() {
    return (
      
        
          <div className={this.props.className} >
            <a className='navText' href={this.props.href}>{this.props.text} </a>
          </div>
       
    );
  }
}

class NavBar extends React.Component {
  render() {
    
    return (
     
        <nav className='navGroup'>
          <a className='logo'>LOGO</a>
         {/* <Navbutton className='login' href="" text="Login" /> */}
         <Navbutton className='contact' href="" text="Contact" />
         <Navbutton className='Home' href="" text="Home" />

        </nav>
      
    );
  }
}

export default NavBar;
