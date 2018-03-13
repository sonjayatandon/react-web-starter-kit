// Centralized propType definitions
import PropTypes from 'prop-types';

const { shape, string } = PropTypes;

export const authType = shape({
  token: string,
  email: string
});
