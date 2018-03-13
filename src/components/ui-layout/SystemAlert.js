import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom"
import {connect} from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

import * as R from "ramda";

import * as systemActions from "../../actions/systemActions";

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class SystemAlert extends React.Component {

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.props.dispatch(systemActions.alertClear());
  };

  render() {
    const { classes, open, message } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    open: state.alert != null,
    message: state.alert
  }
}

SystemAlert.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
  dispatch: PropTypes.func,
};

export default R.pipe(
  connect(mapStateToProps),
  withRouter,
  withStyles(styles, { withTheme: true }))(SystemAlert);
