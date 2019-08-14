import React from 'react';
import { Container } from 'react-bootstrap';

import Game from '../components/Game';

function Home() {
  return (
    <Container style={{ padding: '4rem 0', flex: '1 0 auto', minHeight: '100%' }}>
      <Game />
    </Container>
  );
}

export default Home;
