import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="logo" />
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
      </div>
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