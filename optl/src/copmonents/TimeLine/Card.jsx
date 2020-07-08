import React, { Component } from "react";
import "./../../App.css";
import ReactDOM from "react-dom";
import $ from "jquery";
class OpenCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="openEventCard">
        <div className="openImgContainer">
          <img
            src={require("../../assets/img/photo_2019-05-01_17-44-31.jpg")}
          ></img>
        </div>
        <div className="openText">
          <h5>
            Luffy meets jenby
            {/* {this.props.title} */}
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            obcaecati
            {/* {this.props.description} */}
          </p>
          
        </div>
      </div>
    );
  }
}

class ClosedCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Eventcard">
        <img
          src={require("../../assets/img/photo_2019-05-01_17-44-31.jpg")}
        ></img>
      </div>
    );
  }
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div
        // className={this.state.open ? "Eventcard" : "openEventCard"

        onClick={(e) => this.togglePanel(e)}
      >
        {this.state.open === true && <ClosedCard />}
        {this.state.open === false && <OpenCard />}
      </div>
    );
  }
}
export default Card;
