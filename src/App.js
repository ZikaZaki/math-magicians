import React from 'react';
import CalcWrapper from './components/CalcWrapper';
import CalcScreen from './components/CalcScreen';
import ButtonsPad from './components/ButtonsPad';
import Button from './components/Button';
/* eslint-disable react/no-array-index-key */
class App extends React.Component {
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
      <CalcWrapper>
        <CalcScreen value="0" />
        <ButtonsPad>
          {this.btnValues.flat().map((row, index) => (
            <Button key={index} value={row} />
          ))}
        </ButtonsPad>
      </CalcWrapper>
    );
  }
}

export default App;
