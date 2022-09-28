import React from 'react';
import PropTypes from 'prop-types';
// Importing Styles
import './CalcWrapper.css';

const CalcWrapper = ({ children }) => (
  <div className="calcWrapper">
    <div className="left-content">
      <h2 className="subtitle">Let&apos;s do some math!</h2>
    </div>
    <div className="right-content">
      <div className="calculator">
        {children}
      </div>
    </div>
  </div>
);

CalcWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcWrapper;
