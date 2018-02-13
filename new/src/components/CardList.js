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
    description:'', // Various column sizes and integer values ​​of row sizes are displayed.
    url: 'https://egusahiroaki.github.io/dot_int/'
  },
  {
    image: egg,
    title:'Egg',
    description:'',
    url: 'https://egusahiroaki.github.io/friedEgg1/'
  },
  {
    image: face,
    title:'Face',
    description:'',
    url: 'https://egusahiroaki.github.io/Face/'
  },
  {
    image: mtg,
    title:'markdown table',
    description:'',
    url: 'https://egusahiroaki.github.io/markdownTableGenerator/#/'
  },
  {
    image: brush,
    title:'brush',
    description:'',
    url: 'https://egusahiroaki.github.io/brush01/'
  },
  {
    image: quick,
    title: 'Quick Sort',
    description:'',
    url: 'https://egusahiroaki.github.io/quickSort/'
  },
  {
    image: bubble,
    title: 'Bubble Sort',
    description:'',
    url: 'https://egusahiroaki.github.io/bubbleSort/'
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
            url={item.url}
          />
        })}
      </ul>
    );
  }
}

export default CardList;
