import React, { Component } from 'react';

import NewCard from './NewCard';

import dotInt from '../images/dot_int.png';
import egg from '../images/egg.png';
import face from '../images/face.png';
import mtg from '../images/markdown_table_generator.png';
import brush from '../images/brush.png';
import quick from '../images/quick_sort.png';
import bubble from '../images/bubble_sort.png';

import Modal from 'react-modal';
import DetailModal from './DetailModal';


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

const customStyles = {
  content : {
    width : '80%',
    height : '80%',
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)'
  }
};

class CardList extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // newCardでのクリック
  // showModal(index, url){
  //   window.scrollTo(0, 0);
  //   this.setState({ currentIndex:  index} );
  //   this.setState({ currentURL:  url} );

  //   ////////////////////////////

  //   // // 1つしかないため
  //   // 円盤
  //   // var contentWrapper = document.querySelectorAll(".Detail")[0];
  //   // contentWrapper.classList.add('clicked');

  //   // // 円盤の中心
  //   // var contentWrapper = document.querySelectorAll(".DetailCenter")[0];
  //   // contentWrapper.classList.add('DetailCenterClicked');
 
  //   // // 円盤の柄
  //   // var content = document.querySelectorAll(".demo")[0];
  //   // content.classList.add('clicked');
  //   // content.src = url;
  // }

  // stop(url){
  //   // クリックしたら、サイズを小さくし再生を止める。
  //   // console.log("stop");
  //   // console.log(this.state.currentIndex);

  //   var contentWrapper = document.querySelectorAll(".Detail")[0];
  //   contentWrapper.classList.remove('clicked');

  //   // 円盤の中心
  //   var contentWrapper = document.querySelectorAll(".DetailCenter")[0];
  //   contentWrapper.classList.remove('DetailCenterClicked');
 
  //   // 円盤の柄
  //   var content = document.querySelectorAll(".demo")[0];
  //   content.classList.remove('clicked');

  //   var content = document.querySelectorAll(".demo")[0];
  //   content.classList.remove('clicked');
  //   content.src = "";
  // }

  openModal(item) {
    this.setState({
      modalIsOpen: true,
      currentItem: item
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    return (
      <div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <DetailModal
            item={this.state.currentItem}
            closeModal={this.closeModal}
          />
        </Modal>

        {testItems.map((item, index) => {
          return <NewCard
            click={() => this.openModal(item)}
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

Modal.setAppElement('#root');

export default CardList;
