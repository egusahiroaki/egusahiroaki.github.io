/* eslint-disable react/no-multi-comp */

import React from 'react';

class DetailModal extends React.Component {
  render() {
    return (
      <div style={{height: '95%'}}>
        <div style={{height: '80%', textAlign: 'center', marginBottom: '8px'}}>
          <iframe
            title={this.props.item.title}
            src={this.props.item.url}
            style={{width:'100%', height: '100%'}}
            frameBorder='0'
          />
        </div>

        {this.props.item.tags.map((tag, index) => {
          return <div 
            key={index}
            style={{
              color: tag.color,
              backgroundColor:tag.bkColor,
              margin: '3px',
              display: 'inline',
              padding: '4px',
              fontSize: '0.3em',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {tag.title}
          </div>;
        })}

        <h3 style={{textAlign: 'center'}}>
          {this.props.item.title}
        </h3>


        <div style={{margin:'10px auto', textAlign: 'center'}}>{this.props.item.description}</div>
        <div style={{textAlign:'center', fontSize: '13px'}}>
          <span onClick={this.props.prevModal}> &#9664; </span>
          <span onClick={this.props.closeModal}> X </span>
          <span onClick={this.props.prevModal}> ︎&#9654; </span>
        </div>
      </div>
    );
  }
}

export default DetailModal;
