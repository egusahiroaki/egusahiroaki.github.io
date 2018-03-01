/* eslint-disable react/no-multi-comp */

import React from 'react';

class DetailModal extends React.Component {
  render() {
    return (
      <div style={{height: '95%'}} onClick={this.props.closeModal}>
        <h2 style={{textAlign: 'center'}}>
          {this.props.item.title}
        </h2>
  
        <div style={{height: '95%', textAlign: 'center'}}>
          <iframe
            src={this.props.item.url}
            style={{width:'80%', height: '80%'}}
            frameBorder='0'
          />
        </div>

        <div>{this.props.item.description}</div>
      </div>
    );
  }
}

export default DetailModal;
