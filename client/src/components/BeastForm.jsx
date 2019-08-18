import React from 'react';

const BeastCardForm = (props) => {
  const { onFormSubmit, onFormClose } = props;
  return (
    <div>
      <p>Beast Card form</p>
      <button type="button" onClick={onFormClose}>
        Submit
      </button>
    </div>
  );
};

export default BeastCardForm;
