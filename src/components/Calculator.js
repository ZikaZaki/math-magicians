import React from 'react';
import CalcWrapper from './CalcWrapper';
import CalcScreen from './CalcScreen';
import ButtonsPad from './ButtonsPad';
import Button from './Button';
import CalcProvider from '../context/CalcContext';
/* eslint-disable react/no-array-index-key */
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.btnValues = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
  }

  render() {
    return (
      <CalcProvider>
        <CalcWrapper>
          <CalcScreen value="0" />
          <ButtonsPad>
            {this.btnValues.flat().map((row, index) => (
              <Button key={index} value={row} />
            ))}
          </ButtonsPad>
        </CalcWrapper>
      </CalcProvider>
    );
  }
}

export default Calculator;
