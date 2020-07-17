import React, { Component } from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import * as Icons from "@fortawesome/free-brands-svg-icons"

export default class Footer extends Component {
  render() {
    return (

      <footer >
      <div>
        <h3>Contact Me</h3>
        <div  className='contactSection'>

      
        <a href="#"><FontAwesomeIcon icon={Icons.faTwitter} size='2x' href=''/> </a>
        

        
        <a href="#" class="fa fa-linkedin"><FontAwesomeIcon icon={Icons.faLinkedin} size='2x' /></a>
        <a href="#" class="fa fa-github"><FontAwesomeIcon icon={Icons.faGithub} size='2x' /></a>
        <a href="#" class="fa fa-envelope"><FontAwesomeIcon icon={Icons.faCreativeCommonsSampling} size='2x' /></a>
        </div>
      </div>
      <div className="footer-bottom">
              <p className="text-xs-center">
                  &copy;{new Date().getFullYear()} OnePeice Time Line 
              </p>
          </div>
    </footer>
          
       

      /* <footer class="container-fluid text-center">
      <div class="row">
       >
    </footer> */
    );
  }
}
