import React from 'react';
import { Button } from 'react-bootstrap';

const FactionRow = (props) => {
  const {
    name, leader, onFormOpen, handleDelete,
  } = props;

  const paddingRight = {
    marginRight: '10px',
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{leader}</td>
      <td>
        <Button type="button" onClick={onFormOpen} style={paddingRight}>Edit</Button>
        <Button type="button" variant="danger" onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  );
};

export default FactionRow;
