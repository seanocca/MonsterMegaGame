import React from 'react';
import AdminBlockForm from './AdminBlockForm';
import BlockRow from './BlockRow/BlockRow';

const EditableBlockRow = (props) => {
  const {
    name, latitude, longitude, setEditKey,
  } = props;
  if (props.editKey === props.cognitoID) {
    return (
      <AdminBlockForm
        {...props}
        onFormClose={() => setEditKey('')}
      />
    );
  }
  return (
    <BlockRow
      name={name}
      latitude={latitude}
      longitude={longitude}
      onFormOpen={() => setEditKey(props.cognitoID)}
    />
  );
};

export default EditableBlockRow;
