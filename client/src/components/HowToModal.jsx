import React from 'react';

import { Modal, Button } from 'react-bootstrap';

import './Buttons.css';

function HowToModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      autoFocus={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How to Play the Monster Megagame
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>
          1. Click on a Building
          <br />
          2. Select a Monster to Attack with
          <br />
          3. Select an Attack
          <br />
          4. Take over the Map
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HowToModal;
