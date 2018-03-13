import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom"
import {connect} from 'react-redux';
import { Field, reduxForm } from "redux-form"

import { Paper, Button } from "material-ui";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import { LinearProgress } from 'material-ui/Progress';

import * as R from "ramda";

import {CenteredContainer, Form, renderTextField} from "../ui-common/forms";
import * as userActions from "../../actions/userActions";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function LoginPage(props) {
  const { classes, history, handleSubmit, dispatch, pristine, submitting, loading } = props;

  const login = ({ email, password }) => {
    dispatch(userActions.login({ email, password, history }))
  }

  return (
    <CenteredContainer>
      <Paper className={classes.root} elevation={2} square={true}>
        <Typography variant="headline" component="h1">
          Login
        </Typography>
        <Form onSubmit={handleSubmit(login)}>
          <Field name="email" component={renderTextField} label="E-Mail" />
          <Field
            name="password"
            component={renderTextField}
            type="password"
            label="Password"
          />
          <Button type="submit"
                  variant="raised"
                  color="primary"
                  disabled={pristine || submitting}
                  className={classes.button}>
            Submit
          </Button>
        </Form>
        {loading && <LinearProgress />}
      </Paper>
    </CenteredContainer>
  )
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  loading: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default R.pipe(
  connect(mapStateToProps),
  withRouter,
  reduxForm({
    form: "login",
  }),
  withStyles(styles))(LoginPage);


