/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';

import IconButton from 'material-ui/IconButton';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';


const emails = ['username@gmail.com', 'user02@gmail.com'];

const styles = theme => ({
  playIcon: {
    height: 38,
    width: 38,
  },
});


class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <div>
          <List>
            {emails.map(email => (
              <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                {/* <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar> */}
                <ListItemText primary={email} />
              </ListItem>
            ))}
            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              {/* <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar> */}
              <ListItemText primary="add account" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const DetailModal = withStyles(styles)(SimpleDialog);

// class DetailModal extends React.Component {
//   state = {
//     open: false,
//     selectedValue: emails[1],
//   };

//   handleClickOpen = () => {
//     this.setState({
//       open: true,
//     });
//   };

//   handleClose = value => {
//     this.setState({ selectedValue: value, open: false });
//   };

//   render() {
//     return (
//       <div>
//         {/* <Typography variant="subheading">Selected: {this.state.selectedValue}</Typography> */}
//         <br />
//         <IconButton aria-label="Play/pause" onClick={this.handleClickOpen}>
//           <PlayArrowIcon style={ { 'marginTop':'10' }} />
//         </IconButton>

//         {/* <Button >Open simple dialog</Button> */}
//         <SimpleDialogWrapped
//           selectedValue={this.state.selectedValue}
//           open={this.state.open}
//           onClose={this.handleClose}
//         />
//       </div>
//     );
//   }
// }

export default DetailModal;
// import React from 'react';
// import Dialog from 'material-ui/Dialog';
// import Button from 'material-ui/Button';

// export default class DetailModal extends React.Component {
//   state = {
//     open: false,
//   };

//   handleOpen = () => {
//     this.setState({open: true});
//   };

//   handleClose = () => {
//     this.setState({open: false});
//   };

//   render() {
//     const actions = [
//       <Button
//         label="x"
//         primary={true}
//         onClick={this.handleClose}
//       />,
//     ];

//     return (
//       <div>
//         <Button label="View Detail" onClick={this.handleOpen} />
//         <Dialog
//           title="Dialog With Actions"
//           actions={actions}
//           modal={true}
//           open={this.state.open}
//         >
//           <iframe src={this.props.url} width="600" height="200"></iframe>
//         </Dialog>
//       </div>
//     );
//   }
// }