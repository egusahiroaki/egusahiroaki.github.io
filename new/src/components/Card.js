import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
  render() {
    return (
      <li className="Item">
        <div className="ImageContainer">
          <img className="Image" src={this.props.image} alt="logo" />
        </div>
        <div className="DescriptionContainer">
          <div className="Title">{this.props.title}</div>
          <div className="Description">{this.props.description}</div>
        </div>
        <div className="Button">View Detail ></div>
      </li>
    );
  }
}

export default Card;

/*
image
title
description
日付
*/