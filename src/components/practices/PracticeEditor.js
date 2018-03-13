import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom"

import { withStyles } from 'material-ui/styles';

import * as R from "ramda";

import {MainPage} from "../ui-common/pages";
import PracticeSteps from './PracticeSteps';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class PracticeEditor extends React.Component {
  render() {
    return (
      <MainPage title="Edit Practice">
        <PracticeSteps />
      </MainPage>
    );
  }
}

PracticeEditor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default R.pipe(
  withRouter,
  withStyles(styles))(PracticeEditor);
