import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

const Icon = ({ type, icon, className }) => (
  <i className={makeClass(type, `fa-${icon}`, className)} />
);

Icon.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string
};

Icon.defaultProps = {
  type: 'far',
  icon: 'question-circle',
  className: null
};

export default Icon;
