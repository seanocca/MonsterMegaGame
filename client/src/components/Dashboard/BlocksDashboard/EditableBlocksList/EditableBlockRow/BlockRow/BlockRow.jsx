import React from 'react';
import { Button } from 'react-bootstrap';

const BlockRow = (props) => {
  const {
    name, latitude, longitude, onFormOpen, handleDelete,
  } = props;

  const paddingRight = {
    marginRight: '10px',
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{latitude}</td>
      <td>{longitude}</td>
      <td>
        <Button type="button" onClick={onFormOpen} style={paddingRight}>Edit</Button>
        <Button type="button" variant="danger" onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  );
};

export default BlockRow;
