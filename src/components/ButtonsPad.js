import React from 'react';
import PropTypes from 'prop-types';

class ButtonsPad extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="buttonsPad">
        {children}
      </div>
    );
  }
}

ButtonsPad.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonsPad;
