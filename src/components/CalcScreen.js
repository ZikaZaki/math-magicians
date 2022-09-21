import React from 'react';
import PropTypes from 'prop-types';

class CalcScreen extends React.PureComponent {
  render() {
    const { value } = this.props;
    return (
      <div className="calcScreen">
        {value}
      </div>
    );
  }
}

CalcScreen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalcScreen;
