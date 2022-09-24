import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CalcContext = createContext();
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const providerValue = {
    calc, setCalc,
  };

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
};

CalcProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcProvider;
