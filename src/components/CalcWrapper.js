import React from 'react';
import PropTypes from 'prop-types';


const CalcWrapper = ({ children }) => {
  return(
    <div className="calcWrapper">
        {children}
    </div>
  )
}

CalcWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcWrapper;
