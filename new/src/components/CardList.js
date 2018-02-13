import React, { Component } from 'react';
import Card from './Card';

import NewCard from './NewCard';


import dotInt from '../images/dot_int.png';
import egg from '../images/egg.png';
import face from '../images/face.png';
import mtg from '../images/markdown_table_generator.png';
import brush from '../images/brush.png';
import quick from '../images/quick_sort.png';
import bubble from '../images/bubble_sort.png';

var testItems = [
  {
    image: dotInt,
    title: 'Dot Integer',
    description:'' // Various column sizes and integer values ​​of row sizes are displayed.
  },
  {
    image: egg,
    title:'Egg',
    description:''
  },
  {
    image: face,
    title:'Face',
    description:''
  },
  {
    image: mtg,
    title:'markdown table',
    description:''
  },
  {
    image: brush,
    title:'brush',
    description:''
  },
  {
    image: quick,
    title: 'Quick Sort',
    description:''
  },
  {
    image: bubble,
    title: 'Bubble Sort',
    description:''
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
        {/* {testItems.map((item) => {
          return <Card
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        })} */}
        {testItems.map((item) => {
          return <NewCard
            key={item.title}
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
