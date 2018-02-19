import React, { Component } from 'react';

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
    padding: "0",
    margin: "0",
  },

  canvasWrapprer: {
    position: "relative",
  },

  canvas: {
  }
}

class CardList extends Component {

  // newCardでのクリック
  showModal(url){
    // window.open(url, '_blank');
    console.log("親だよ");
    console.log(url);

    // // 1つしかないため
    var content = document.querySelectorAll(".Detail")[0];
    content.classList.toggle('clicked');

    // document.getElementById('demo').src = url;
  }
  render() {
    return (
      <div>
        <div style={style.canvasWrapprer}>
          <div className="Detail">
            {/* <iframe 
              id="demo"
              src={this.props.url} 
              width="40" 
              height="40"
            >
            </iframe> */}
            {/* <div id="demoCenter" className="DetailCenter">
              hoge
            </div> */}
          </div>
        </div>

        {testItems.map((item, index) => {
          return <NewCard
            click={() => this.showModal(item.url)}
            key={item.title}
            index={index}
            image={item.image}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        })}
      </div>
    );
  }
}

export default CardList;
