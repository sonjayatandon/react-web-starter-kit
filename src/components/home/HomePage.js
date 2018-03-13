import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import * as R from "ramda";

import {MainPage} from "../ui-common/pages";
import PracticeBrowser from "../practices/PracticeBrowser";

const styles = {
  root: {
    flexGrow: 1,
  },
};

class HomePage extends React.Component {
  render() {
    return (
      <MainPage title="Home">
        <PracticeBrowser/>
      </MainPage>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default R.pipe(
  withStyles(styles))(HomePage);

