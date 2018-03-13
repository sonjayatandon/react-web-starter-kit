// react components
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

// utility components
import * as R from "ramda";

// app components
import AuthorizedApp from './AuthorizedApp';
import UnauthorizedApp from './UnauthorizedApp';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    let loggedIn = !!R.path(["auth", "token"])(this.props)
    let email = loggedIn && this.props.auth.email
    if (loggedIn) {
      return (
        <AuthorizedApp email ={email}/>
      );
    } else {
      return (
        <UnauthorizedApp />
      );
    }
  }
}

App.propTypes = {
  auth: PropTypes.shape({
    token: PropTypes.string,
    email: PropTypes.string
  })
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default R.pipe(connect(mapStateToProps), withRouter)(App);
