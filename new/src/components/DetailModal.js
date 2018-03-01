/* eslint-disable react/no-multi-comp */

import React from 'react';

class DetailModal extends React.Component {
  render() {
    return (
      <div style={{height: '95%'}} onClick={this.props.closeModal}>
        <h3 style={{textAlign: 'center'}}>
          {this.props.item.title}
        </h3>
  
        <div style={{height: '80%', textAlign: 'center', marginBottom: '8px'}}>
          <iframe
            src={this.props.item.url}
            style={{width:'100%', height: '100%'}}
            frameBorder='0'
          />
        </div>

        {this.props.item.tags.map((tag, index) => {
          return <div 
          style={{
            backgroundColor:tag.color,
            margin: '3px',
            display: 'inline',
            padding: '4px',
            fontSize: '0.8em',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          >
            {tag.title}
          </div>;
        })}


        <div style={{margin:'10px auto', textAlign: 'center'}}>{this.props.item.description}</div>
      </div>
    );
  }
}

export default DetailModal;
