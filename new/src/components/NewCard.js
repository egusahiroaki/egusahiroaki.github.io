import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import bubble from '../images/bubble_sort.png';


class NewCard extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Card style={ {'max-width': '450px', 'margin':'30px auto' } }>
          <CardMedia
            overlay={<CardTitle title={this.props.title} subtitle={this.props.description} />}
          >
            <img src={this.props.image} alt="" />
          </CardMedia>
          {/* <CardTitle title={this.props.title} subtitle="Card subtitle" /> */}
          {/* <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText> */}
          <CardActions>
            <FlatButton label="View Detail" />
          </CardActions>
        </Card>
      </MuiThemeProvider>
    );
  }
}


export default NewCard;