import React from 'react';
import { Button } from 'react-bootstrap';

const BlockRow = (props) => {
  const {
    name, latitude, longitude, onFormOpen,
  } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{latitude}</td>
      <td>{longitude}</td>
      <td><Button type="button" onClick={onFormOpen}>Edit Block</Button></td>
    </tr>
  );
};

export default BlockRow;
