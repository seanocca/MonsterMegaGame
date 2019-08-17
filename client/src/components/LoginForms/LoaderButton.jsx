import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import './LoaderButton.css';

const spinning = {
  marginRight: '7px',
  top: '2px',
  animation: 'spin 2s infinite linear',
};

export default ({
  isLoading,
  text,
  loadingText,
  className = '',
  disabled = false,
  ...props
}) => (
  <Button
    className={`${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <FontAwesomeIcon icon={faSyncAlt} style={spinning} />}
    {!isLoading ? text : loadingText}
  </Button>
);
