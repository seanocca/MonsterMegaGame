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
  const initialValue = Array.isArray(initVal) ? initVal.join(separator) : initVal;
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit() {
    return value.split(separator);
  }

  return {
    value,
    onChange: handleChange,
    handleSubmit,
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
    width: '18rem',
    height: 'auto',
    border,
  };
};
