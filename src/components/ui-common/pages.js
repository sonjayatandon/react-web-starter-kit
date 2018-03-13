import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MainPage extends Component {
  render() {
    const {title, children} = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

MainPage.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string.isRequired
};

