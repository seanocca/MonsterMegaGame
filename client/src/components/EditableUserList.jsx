import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';

// import EditableUser from './EditableUser';

class EditableUserList extends Component {
  x = () => { /* Temp fix to remove list warnings */ };

  render() {
    // const users = this.props.users.map((user) => (
    //   <EditableUser
    //     key={user.key}
    //     firstName={user.firstName}
    //     lastName={user.lastName}
    //   />
    // ));

    // return <Container>{users}</Container>;
    return (
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <a href="/#">Edit User</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <a href="/#">Edit User</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <a href="/#">Edit User</a>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default EditableUserList;
