import React from 'react';
import { Button } from 'react-bootstrap';

const FactionRow = (props) => {
  const {
    name, leader, onFormOpen,
  } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{leader}</td>
      <td><Button type="button" onClick={onFormOpen}>Edit Faction</Button></td>
    </tr>
  );
};

export default FactionRow;
