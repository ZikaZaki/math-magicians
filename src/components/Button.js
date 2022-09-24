import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CalcContext } from '../context/CalcContext';
import calculate from '../logic/calculate';

const getClassName = (value) => {
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
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  // This method is for handling all click events
  const handleClick = () => {
    const calcResult = calculate(calc, value);

    setCalc(calcResult);
  };

  return (
    <button onClick={handleClick} type="button" className={`${getClassName(value)} button`}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
