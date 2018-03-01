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
    description:'You can write Anything.',
    url: 'https://egusahiroaki.github.io/brush01/'
  },
  {
    image: quick,
    title: 'Quick Sort',
    description:'Visualize sorting algorithm called quick sort',
    url: 'https://egusahiroaki.github.io/quickSort/'
  },
  {
    image: bubble,
    title: 'Bubble Sort',
    description:'Visualize sorting algorithm called bubble sort.',
    url: 'https://egusahiroaki.github.io/bubbleSort/'
  }

]

const customStyles = {
  content : {
    width : '90%',
    height : '90%',
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
