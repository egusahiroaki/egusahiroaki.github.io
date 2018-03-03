import React, { Component } from 'react';
import '../App.css';
import Items from '../../src/content';

class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      isSelected: false,
      categoryName: ''
    };
  }

  selectCategory(name){
    console.log(name)
    this.setState({
      isSelected: true,
      categoryName: name
    });
  }

  getCategoryListFromContent(){
    const rawCategory = Items.map((item) => item.tags);

    // use flatten
    const flatten = list => list.reduce(
      (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
     );

    // unique by title key
    const unique = (list, keyName) => {
      let newList = [];
      for(const item of list){
        const alreadyHave = newList.some((newItem) => newItem.title === item.title);
        if (!alreadyHave){
          newList.push(item);
        }
      }
      return newList;
    };

    const category = unique(flatten(rawCategory), 'title');
    return category;
  }
  render() {
    return (
      <div style={{textAlign: 'center', marginTop:'20px'}}>
        {this.getCategoryListFromContent().map((tag, index) => {
          return <div key={index}
            style={{
              color: tag.color,
              backgroundColor:tag.bkColor,
              margin: '3px',
              display: 'inline',
              padding: '3px',
              fontSize: '0.4em',
              borderRadius: '3px',
            }}
            onClick={() => {this.selectCategory(tag.title)}}
          >
            {tag.title}
          </div>;
        })}
      </div>

    );
  }
}

export default CategoryList;
