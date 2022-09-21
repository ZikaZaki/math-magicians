import React from 'react';
import PropTypes from 'prop-types';

class CalcWrapper extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="calcWrapper">
        {children}
      </div>
    );
  }
}

CalcWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcWrapper;
