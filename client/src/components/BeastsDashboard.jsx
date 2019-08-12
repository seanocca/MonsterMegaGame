import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import Dashboard from '../pages/Dashboard';

class BeastsDashboard extends Component {
  x = () => { /* Temp fix to remove list warnings */ };

  render() {
    return (
      <Container style={{ padding: '4rem 0' }}>
        <Dashboard />
        <h1>Beasts</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Beast Name</th>
              <th>Faction</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mitochondria</td>
              <td>Mechanica</td>
              <td>
                <a href="/#">Edit Beast</a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Surveillance Team</td>
              <td>Voidborn</td>
              <td>
                <a href="/#">Edit Beast</a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Octothorpe</td>
              <td>Biochondrys</td>
              <td>
                <a href="/#">Edit Beast</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default BeastsDashboard;
