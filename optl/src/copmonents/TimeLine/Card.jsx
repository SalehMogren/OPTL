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
            src={require("../../assets/img/"+this.props.img)}
          ></img>
        </div>
        <div className="openText">
          <h5>
            {this.props.title}
          </h5>
          <p>
           
            {this.props.description}
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
          src={require("../../assets/img/"+this.props.img)}
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
        {this.state.open === true && <ClosedCard {...this.props}/>}
        {this.state.open === false && <OpenCard {...this.props} />}
      </div>
    );
  }
}
export default Card;
