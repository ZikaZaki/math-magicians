import React from 'react';
import PropTypes from 'prop-types';
import { CalcContext } from '../context/CalcContext';

class Button extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    
    // When using ES6, we have to bind (this) to all event methods
    this.handleClick = this.handleClick.bind(this);
    this.acClick = this.acClick.bind(this);
    this.plusMinusClick = this.plusMinusClick.bind(this);
    this.modClick = this.modClick.bind(this);
    this.commaClick = this.commaClick.bind(this);
    this.numClick = this.numClick.bind(this);
    this.optClick = this.optClick.bind(this);
    this.equalClick = this.equalClick.bind(this);
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
    const { value } = this.state;
    const results = {
      AC: this.acClick,
      '+/-': this.plusMinusClick,
      '%': this.modClick,
      '.': this.commaClick,
      x:  this.optClick,
      '÷': this.optClick,
      '-': this.optClick,
      '+': this.optClick,
      '=': this.equalClick,
    };
  
    return results[value] ? results[value]() : this.numClick();
  }

  // User clicks AC
  acClick() {
    const { setCalc } = this.context;
    setCalc({
      sign: '',
      num: 0,
      res: 0,
    });
  }

  // User clicks plusMinus
  plusMinusClick(){
    const { calc, setCalc } = this.context;
    setCalc({
      num: calc.num * -1,
      res: calc.res * -1,
    });
  }

  // User clicks mod(%)
  modClick() {
    const { calc, setCalc } = this.context;
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: ''
    });
  }

  // User clicks comma(.)
  commaClick() {
    const { calc, setCalc } = this.context;
    const { value } = this.state;
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? `${calc.num}${value}` : calc.num,
    });
  }

  // User clicks any number
  numClick() {
    const { calc, setCalc } = this.context;
    const { value } = this.state;
    let num = value;
    console.log(typeof(value));
    console.log(typeof(calc.num));
    num = (value === '0' && calc.num === 0) ? '0' : Number(`${calc.num}${value}`);
    setCalc({
      ...calc,
      num: num,
    });
  }

  // User clicks any operator (+, -, x, ÷)
  optClick() {
    const { calc, setCalc } = this.context;
    const { value } = this.state;
    setCalc({
      sign: value,
      num: 0,
      res: calc.num,
    });
  }
  
  // User clicks equal(=)
  equalClick() {
    const { calc, setCalc } = this.context;
    if(calc.res && calc.num){
      const math = (a, b, sign) => {
        const result = {
          '%': (a, b) => a % b,
          'x': (a, b) => a * b,
          '÷': (a, b) => a / b,
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
        }
        return result[sign](a, b);
      }

      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0,
      })
    }
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
