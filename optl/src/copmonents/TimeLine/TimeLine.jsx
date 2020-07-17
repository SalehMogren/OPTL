import React, { Component } from "react";
import "./../../App.css";
import Card from './Card.jsx';
import ReactDOM from "react-dom";
import $ from 'jquery';

class TimeLine extends Component {
  // retrive events from DB
  
  

  cards = () => {
    const cardObj={
      id :'1',
      title : 'Luffy meets Jenby',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odio, vel alias at ducimus, nostrum iusto minima reiciendis aliquam itaque voluptas nemo. Voluptatum porro aliquid praesentium illo eveniet doloribus commodi.',
      img : 'photo_2019-05-01_17-44-31.jpg'
    }
    const card = [];
    for (let index = 0; index < 20; index++) {
      card.push(
        <Card {...cardObj} />
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
