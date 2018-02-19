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
  showModal(index, url){
    window.scrollTo(0, 0);
    this.setState({ currentIndex:  index} );
    this.setState({ currentURL:  url} );

    // window.open(url, '_blank');
    // console.log("親だよ");
    // console.log(url);

    ////////////////////////////

    // // 1つしかないため
    // 円盤
    var contentWrapper = document.querySelectorAll(".Detail")[0];
    contentWrapper.classList.add('clicked');

    // 円盤の中心
    var contentWrapper = document.querySelectorAll(".DetailCenter")[0];
    contentWrapper.classList.add('DetailCenterClicked');
 
    // 円盤の柄
    var content = document.querySelectorAll(".demo")[0];
    content.classList.add('clicked');
    content.src = url;
  }

  stop(url){
    // クリックしたら、サイズを小さくし再生を止める。
    // console.log("stop");
    // console.log(this.state.currentIndex);

    var contentWrapper = document.querySelectorAll(".Detail")[0];
    contentWrapper.classList.remove('clicked');

    // 円盤の中心
    var contentWrapper = document.querySelectorAll(".DetailCenter")[0];
    contentWrapper.classList.remove('DetailCenterClicked');
 
    // 円盤の柄
    var content = document.querySelectorAll(".demo")[0];
    content.classList.remove('clicked');

    var content = document.querySelectorAll(".demo")[0];
    content.classList.remove('clicked');
    content.src = "";
  }
  render() {

    return (
      <div>
        {/* componentに切り出したい */}
        <div style={style.canvasWrapprer}>
          <div className="Detail">
            <iframe 
              className="demo"
              width="40" 
              height="40"
              frameBorder="0"
            >
            </iframe>
            <div onClick={() => this.stop()} id="demoCenter" className="DetailCenter">
            </div>
          </div>
        </div>

        {testItems.map((item, index) => {
          return <NewCard
            click={() => this.showModal(index, item.url)}
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
