import React from 'react';

const useToggle = (initVal) => {
  const [state, setState] = React.useState(initVal);
  const toggleState = () => {
    setState(!state);
  };
  return [state, toggleState];
};

export default useToggle;
