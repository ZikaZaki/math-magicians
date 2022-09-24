import React from 'react';
import PropTypes from 'prop-types';


const ButtonsPad = ({ children })=>{
  return(
    <div className="buttonsPad">
        {children}
      </div>
  )
}

ButtonsPad.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonsPad;
