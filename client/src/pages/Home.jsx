import React from 'react';
import { ButtonToolbar, Button, Container } from 'react-bootstrap';

import Game from '../components/Game';
import HowToModal from '../components/HowToModal';
import Maps from '../components/Maps/googlemaps';
import Geolocation from '../components/Maps/googlelocation';

function Home() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container style={{ padding: '4rem 0', flex: '1 0 auto', minHeight: '100%' }}>
      <Game />
      <Maps />
      <Geolocation place="" />
      <ButtonToolbar>
        <Button className="how-to-button" onClick={() => setModalShow(true)}>
          How to Play!
        </Button>

        <HowToModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    </Container>
  );
}

export default Home;
