import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';

import Dashboard from '../pages/Dashboard';

class FactionsDashboard extends Component {
  x = () => { /* Temp fix to remove list warnings */ };

  render() {
    return (
      <Container style={{ padding: '4rem 0' }}>
        <Dashboard />
        <h1>Factions</h1>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Faction Name</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Voidborn</td>
              <td>
                <a href="/#">Edit Faction</a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Biochrondys</td>
              <td>
                <a href="/#">Edit Faction</a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mechanica</td>
              <td>
                <a href="/#">Edit Faction</a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Gatekeepers</td>
              <td>
                <a href="/#">Edit Faction</a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Faction Name</td>
              <td>
                <a href="/#">Add New Faction</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default FactionsDashboard;
