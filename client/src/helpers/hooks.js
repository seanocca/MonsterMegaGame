import { useState } from 'react';

export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
};

export const useTextarea = (initVal, separator = '\n\n') => {
  const initialValue = Array.isArray(initVal)
    ? initVal.join(separator)
    : initVal;
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
};

export const useNumericFormInput = (initialState, min = 0, max = 30) => {
  const [value, setValue] = useState(initialState);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
    min,
    max,
  };
};

export const useFactionCardStyles = (faction) => {
  let border = '';
  switch (faction) {
    case 'Voidborn':
      border = 'solid 10px purple';
      break;
    case 'Mechanica':
      border = 'solid 10px orange';
      break;
    case 'Gatekeeper':
      border = 'solid 10px black';
      break;
    case 'Biochrondys':
      border = 'solid 10px green';
      break;
    default:
    // do nothing
  }
  return {
    // overflowY: 'scroll',
    border,
  };
};
