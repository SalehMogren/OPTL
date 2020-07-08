import React, { Component } from "react";
import "./../../App.css";
import Card from './Card.jsx';
import ReactDOM from "react-dom";
import $ from 'jquery';

// class Card extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: true,
//     };
//     this.togglePanel = this.togglePanel.bind(this);
//   }
//   togglePanel(e) {
//     this.setState({ open: !this.state.open });
//   }
//   //function for opening card
//   openCard = ()=>{
    
//   }
//   //function for closed card

//   render() {
//     return (
//       <div
//         className={this.state.open ? "Eventcard" : "openEventCard"}
//         onClick={(e) => this.togglePanel(e)}
//       >
//         <img src={this.props.src}></img>
//         <h5>Luffy meets jenby</h5>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ex
//           voluptatum! Aliquam rerum amet corporis nobis laudantium impedit quis
//           iste fugit, accusantium, quae ipsa iusto minus modi ullam fuga
//           obcaecati?
//         </p>
//       </div>
//     );
//   }
// }

class TimeLine extends Component {
  // retrive events from DB
  
  const cardObj={
    id :'1',
    titile : 'Luffy meets Jenby',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odio, vel alias at ducimus, nostrum iusto minima reiciendis aliquam itaque voluptas nemo. Voluptatum porro aliquid praesentium illo eveniet doloribus commodi.',
    img : 'photo_2019-05-01_17-44-31.jpg'
  }

  cards = () => {
    const card = [];
    for (let index = 0; index < 20; index++) {
      card.push(
        <Card src={require("../../assets/img/photo_2019-05-01_17-44-31.jpg")} />
      );
    }
    return card;
  };

  render() {
    return (
      
      <div className="scrolling-wrapper-flexbox ">
        {/* <Card src={require('../../assets/img/photo_2019-05-01_17-44-31.jpg')} />
         */}

        {this.cards()}
      </div>
    );
  }
}
export default TimeLine;
