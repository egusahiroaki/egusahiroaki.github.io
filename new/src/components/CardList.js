import React, { Component } from 'react';

import NewCard from './NewCard';

import Modal from 'react-modal';
import DetailModal from './DetailModal';

import Items from '../content';

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

        {Items.map((item, index) => {
          return <NewCard
            click={() => this.openModal(item)}
            key={item.title}
            index={index}
            image={item.image}
            title={item.title}
            description={item.description}
            url={item.url}
            tags={item.tags}
          />
        })}
      </div>
    );
  }
}

Modal.setAppElement('#root');

export default CardList;
