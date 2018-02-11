import React, { Component } from 'react';
import Card from './Card';

var testItems = [
  {
    image:'https://images.unsplash.com/photo-1462730677245-b7da0ec225d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2c1faa1496f3331fb0630deda056d64&auto=format&fit=crop&w=1567&q=80',
    title:'タイトル',
    description:'説明文1'
  },
  {
    image:'https://images.unsplash.com/photo-1462730677245-b7da0ec225d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2c1faa1496f3331fb0630deda056d64&auto=format&fit=crop&w=1567&q=80',
    title:'タイトル',
    description:'説明文2'
  },
  {
    image:'https://images.unsplash.com/photo-1462730677245-b7da0ec225d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2c1faa1496f3331fb0630deda056d64&auto=format&fit=crop&w=1567&q=80',
    title:'タイトル',
    description:'説明文3'
  },
  {
    image:'https://images.unsplash.com/photo-1462730677245-b7da0ec225d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2c1faa1496f3331fb0630deda056d64&auto=format&fit=crop&w=1567&q=80',
    title:'タイトル',
    description:'説明文4'
  },
  {
    image:'https://images.unsplash.com/photo-1462730677245-b7da0ec225d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2c1faa1496f3331fb0630deda056d64&auto=format&fit=crop&w=1567&q=80',
    title:'タイトル',
    description:'説明文5'
  },
  {
    image:'https://images.unsplash.com/photo-1462730677245-b7da0ec225d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2c1faa1496f3331fb0630deda056d64&auto=format&fit=crop&w=1567&q=80',
    title:'タイトル',
    description:'説明文6'
  }
]

var style = {
  cardList: {
    // display: "table",
    padding: "0",
    margin: "0",
  }
}

class CardList extends Component {
  render() {
    return (
      <ul style={style.cardList}>
        {testItems.map((item) => {
          return <Card
            key={item.description}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        })}
      </ul>
    );
  }
}

export default CardList;
