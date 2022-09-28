import React from 'react';
import PropTypes from 'prop-types';

const CalcWrapper = ({ children }) => (
  <div className="calcWrapper">
    <h2 className="subtitle">Let's do some math!</h2>
    <div className="calculator">
      {children}
    </div>
  </div>
);

CalcWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcWrapper;
