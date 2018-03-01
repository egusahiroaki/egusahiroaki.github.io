/* eslint-disable react/no-multi-comp */

import React from 'react';

class DetailModal extends React.Component {
  render() {
    return (
      <div style={{height: '95%'}} onClick={this.props.closeModal}>
        <h3 style={{textAlign: 'center'}}>
          {this.props.item.title}
        </h3>
  
        <div style={{height: '85%', textAlign: 'center'}}>
          <iframe
            src={this.props.item.url}
            style={{width:'100%', height: '100%'}}
            frameBorder='0'
          />
        </div>

        <div style={{margin:'10px auto', textAlign: 'center'}}>{this.props.item.description}</div>
      </div>
    );
  }
}

export default DetailModal;
