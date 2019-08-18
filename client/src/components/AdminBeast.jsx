import React from 'react';

const AdminBeast = (props) => {
  const { name, desc, move, damage, maxdmg, leap, maxleap, hp, maxhp, speed, maxspeed } = props;
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{desc}</td>
        <td>{move}</td>
        <td>{damage}</td>
        <td>{maxdmg}</td>
        <td>{leap}</td>
        <td>{maxleap}</td>
        <td>{hp}</td>
        <td>{maxhp}</td>
        <td>{speed}</td>
        <td>{maxspeed}</td>
      </tr>
    </tbody>
  );
};

export default AdminBeast;
