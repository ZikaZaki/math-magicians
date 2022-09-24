import React from 'react';
import PropTypes from 'prop-types';
import { CalcContext } from '../context/CalcContext';
import calculate from '../logic/calculate';

class Button extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };

    // When using ES6, we have to bind (this) to all event methods
    this.handleClick = this.handleClick.bind(this);
  }

  static getClassName(value) {
    const classNames = {
      AC: 'ac',
      '+/-': 'plusMinus',
      '%': 'mod',
      '÷': 'opt',
      x: 'opt',
      '-': 'opt',
      '+': 'opt',
      '=': 'equal',
      0: 'zero',
      '.': 'dot',
    };
    return classNames[value] || 'num';
  }

  // This method is for handling all click events
  handleClick() {
    const { calc, setCalc } = this.context;
    const { value } = this.state;
    const calcResult = calculate(calc, value);

    setCalc(calcResult);
  }


  render() {
    const { value } = this.state;
    return (
      <button onClick={this.handleClick} type="button" className={`${Button.getClassName(value)} button`}>
        {value}
      </button>
    );
  }
}

// We need to set the contextType to access the class (this.context) object
Button.contextType = CalcContext;

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
