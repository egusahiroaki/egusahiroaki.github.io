import React from 'react';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';

export default class DetailModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <Button
        label="x"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Button label="View Detail" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <iframe src={this.props.url} width="600" height="200"></iframe>
        </Dialog>
      </div>
    );
  }
}