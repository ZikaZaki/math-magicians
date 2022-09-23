import React from 'react';
import { Textfit } from 'react-textfit';
import { CalcContext } from '../context/CalcContext';

class CalcScreen extends React.PureComponent {
  render() {
    const { calc } = this.context;
    return (
      <Textfit className="calcScreen" max={50} mode="single">
        {calc.num ? calc.num : calc.res}
      </Textfit>
    );
  }
}

// We need to set the contextType to access the class (this.context) object
CalcScreen.contextType = CalcContext;

export default CalcScreen;
