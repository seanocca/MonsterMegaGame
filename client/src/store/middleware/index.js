// import {

// } from '../constants/action-types';

// THESE CAN BE DELETED ONCE OLD CODE IS REMOVED
const VALUE_KEY_PRESSED = '';
const PROCESS_VALUE_KEY = '';
const STOPPED_DECIMAL = '';
const STOPPED_LEADING_ZERO = '';
const EQUAL_KEY = '';
const PROCESS_EQUAL_KEY = '';
const PLUS_OPERATOR_KEY_PRESSED = '';
const MINUS_OPERATOR_KEY_PRESSED = '';
const MULTIPLY_OPERATOR_KEY_PRESSED = '';
const DIVIDE_OPERATOR_KEY_PRESSED = '';
const PLUS_MINUS_OPERATOR_KEY_PRESSED = '';
const SQUARED_OPERATOR_KEY_PRESSED = '';
const PROCESS_OPERATOR_KEY_PRESSED = '';

export const processValueKey = ({ getState, dispatch }) => next => (action) => {
  if (VALUE_KEY_PRESSED === action.type) {
    const prevEnterBox = getState().currentValue;
    const newKey = action.payload;

    if (prevEnterBox === '0' && newKey === '0') { return dispatch({ type: STOPPED_LEADING_ZERO }); }
    if (prevEnterBox === '0' && newKey === '.') { return dispatch({ type: PROCESS_VALUE_KEY, payload: prevEnterBox + newKey }); }
    if (prevEnterBox === '0') { return dispatch({ type: PROCESS_VALUE_KEY, payload: newKey }); }
    if (newKey === '.' && (prevEnterBox.indexOf('.') > 0)) { return dispatch({ type: STOPPED_DECIMAL }); }

    // eslint-disable-next-line no-console
    console.log(prevEnterBox + newKey);
    return dispatch({ type: PROCESS_VALUE_KEY, payload: prevEnterBox + newKey });
  }

  return next(action);
};

const removeTrailingPeriod = input => ((input.slice(-1) !== '.') ? input : input.slice(0, -1));
const formatEquation = ({ currentValue, lastValue }) => {
  const cleanedCurrent = removeTrailingPeriod(currentValue);
  return (lastValue) ? lastValue + cleanedCurrent : cleanedCurrent;
};

export const processEqualKey = ({ getState, dispatch }) => next => (action) => {
  if (EQUAL_KEY === action.type) {
    const addPayload = action.payload || '';
    const mathString = formatEquation(getState()) + addPayload;

    let evalMath = '';
    try {
      // eslint-disable-next-line no-eval
      evalMath = eval(mathString);
    } catch (e) {
      evalMath = 'Error';
    }

    const returnString = `${mathString} = ${evalMath}`;

    return dispatch({ type: PROCESS_EQUAL_KEY, payload: returnString });
  }

  return next(action);
};

export const processOperatorKey = ({ getState, dispatch }) => next => (action) => {
  if (PLUS_OPERATOR_KEY_PRESSED === action.type) {
    const mathString = `${formatEquation(getState())} + `;
    return dispatch({ type: PROCESS_OPERATOR_KEY_PRESSED, payload: mathString });
  }

  if (MINUS_OPERATOR_KEY_PRESSED === action.type) {
    const mathString = `${formatEquation(getState())} - `;
    return dispatch({ type: PROCESS_OPERATOR_KEY_PRESSED, payload: mathString });
  }

  if (MULTIPLY_OPERATOR_KEY_PRESSED === action.type) {
    const mathString = `${formatEquation(getState())} * `;
    return dispatch({ type: PROCESS_OPERATOR_KEY_PRESSED, payload: mathString });
  }

  if (DIVIDE_OPERATOR_KEY_PRESSED === action.type) {
    const mathString = `${formatEquation(getState())} / `;
    return dispatch({ type: PROCESS_OPERATOR_KEY_PRESSED, payload: mathString });
  }

  if (PLUS_MINUS_OPERATOR_KEY_PRESSED === action.type) {
    // const mathString = formatEquation( getState() ) + ' (*-1) ';
    return dispatch({ type: EQUAL_KEY, payload: ' *-1' });
  }

  if (SQUARED_OPERATOR_KEY_PRESSED === action.type) { dispatch({ type: EQUAL_KEY, payload: ' ** 2' }); }

  return next(action);
};
