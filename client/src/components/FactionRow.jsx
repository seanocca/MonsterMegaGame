import React from 'react';

const FactionRow = (props) => {
  const {
    name, leader, onFormOpen,
  } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{leader}</td>
      <td><button type="button" onClick={onFormOpen}>Edit Faction</button></td>
    </tr>
  );
};

export default FactionRow;
