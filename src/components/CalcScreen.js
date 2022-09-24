import React, { useContext } from 'react';
import { Textfit } from 'react-textfit';
import { CalcContext } from '../context/CalcContext';

const CalcScreen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit className="calcScreen" max={50} mode="single">
      {calc.total}
      {' '}
      {calc.operation}
      {' '}
      {calc.next}
    </Textfit>
  );
};

export default CalcScreen;
