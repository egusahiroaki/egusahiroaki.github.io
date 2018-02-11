import React, { Component } from 'react';
import Card from './Card';

import logo from '../logo.svg';


class CardList extends Component {
  render() {
    return (
      <div>
        hogehoge
        <Card
          image={logo}
          title='タイトル'
          description='説明文'
        />
      </div>
    );
  }
}

export default CardList;
