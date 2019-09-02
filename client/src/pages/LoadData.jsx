import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { API } from 'aws-amplify';

const Account = () => {
  const beastsCollection = useSelector(state => state.beasts);
  const augmentCollection = useSelector(state => state.augments);
  const factionCollection = useSelector(state => state.factions);
  const riftCollection = useSelector(state => state.rift);
  const overviewCollection = useSelector(state => state.overview);
  const gamerulesCollection = useSelector(state => state.gamerules);

  // **********  Beasts  **********
  const createBeasts = () => {
    beastsCollection.forEach(({ faction, beasts }) => {
      beasts.forEach((beast) => {
        API.post('AWS-HMG-URL', '/beast', { body: { factionName: faction, ...beast } })
          .then(response => console.log('Created A Beast!', response))
          .catch(({ response }) => {
            console.log(`Error(${response.status}): ${response.data.message}`);
          });
      });
    });
  };

  const deleteBeasts = async () => {
    const beasts = await listBeasts();
    beasts.forEach(({ factionName, id }) => {
      API.post('AWS-HMG-URL', '/delete-beast', { body: { factionName, id } })
        .then(response => console.log('Deleted A Beast!', response))
        .catch(({ response }) => {
          console.log(`Error(${response.status}): ${response.data.message}`);
        });
    });
  };

  const listBeasts = async () => API.get('AWS-HMG-URL', '/list-beasts')
    .then(response => response)
    .catch(e => console.log(e));

  // **********  Augments  **********
  const createAugment = () => {
    augmentCollection.forEach(({ faction, augments }) => {
      augments.forEach((augment) => {
        API.post('AWS-HMG-URL', '/augment', { body: { factionName: faction, ...augment } })
          .then(response => console.log('Created A Augment!', response))
          .catch(({ response }) => {
            console.log(`Error(${response.status}): ${response.data.message}`);
          });
      });
    });
  };

  const deleteAugment = async () => {
    const augments = await listAugments();
    augments.forEach(({ factionName, id }) => {
      API.post('AWS-HMG-URL', '/delete-augments', { body: { factionName, id } })
        .then(response => console.log('Deleted A Augment!', response))
        .catch(({ response }) => {
          console.log(`Error(${response.status}): ${response.data.message}`);
        });
    });
  };

  const listAugments = async () => API.get('AWS-HMG-URL', '/list-augments')
    .then(response => response)
    .catch(e => console.log(e));

  // **********  Faction  **********
  const createFaction = () => {
    factionCollection.forEach((faction) => {
      API.post('AWS-HMG-URL', '/faction', { body: { ...faction } })
        .then(response => console.log('Created A Faction!', response))
        .catch(({ response }) => {
          console.log(`Error(${response.status}): ${response.data.message}`);
        });
    });
  };

  const deleteFaction = async () => {
    const factions = await listFaction();
    factions.forEach(({ id }) => {
      API.post('AWS-HMG-URL', '/delete-faction', { body: { id } })
        .then(response => console.log('Deleted A Faction!', response))
        .catch(({ response }) => {
          console.log(`Error(${response.status}): ${response.data.message}`);
        });
    });
  };

  const listFaction = async () => API.get('AWS-HMG-URL', '/list-factions')
    .then(response => response)
    .catch(e => console.log(e));

  // **********  Rift  **********
  const createRift = () => {
    API.post('AWS-HMG-URL', '/rift', { body: { ...riftCollection } })
      .then(response => console.log('Created A Rift!', response))
      .catch(({ response }) => {
        console.log(`Error(${response.status}): ${response.data.message}`);
      });
  };

  const deleteRift = async () => {
    const rifts = await listRift();
    rifts.forEach(({ id }) => {
      API.post('AWS-HMG-URL', '/delete-rift', { body: { id } })
        .then(response => console.log('Deleted A Rift!', response))
        .catch(({ response }) => {
          console.log(`Error(${response.status}): ${response.data.message}`);
        });
    });
  };

  const listRift = async () => API.get('AWS-HMG-URL', '/list-rifts')
    .then(response => response)
    .catch(e => console.log(e));

  // **********  Overview  **********
  const createOverview = () => {
    console.log('overviewCollection', overviewCollection);
    API.post('AWS-HMG-URL', '/overview', { body: { ...overviewCollection } })
      .then(response => console.log('Created A Overview!', response))
      .catch(({ response }) => {
        console.log(`Error(${response.status}): ${response.data.message}`);
      });
  };

  const deleteOverview = async () => {
    const overviews = await listOverview();
    overviews.forEach(({ id }) => {
      API.post('AWS-HMG-URL', '/delete-overview', { body: { id } })
        .then(response => console.log('Deleted A Overview!', response))
        .catch(({ response }) => {
          console.log(`Error(${response.status}): ${response.data.message}`);
        });
    });
  };

  const listOverview = async () => API.get('AWS-HMG-URL', '/list-overviews')
    .then(response => response)
    .catch(e => console.log(e));

  // **********  Game Rules  **********
  const createGameRules = () => {
    console.log('gamerulesCollection', gamerulesCollection);
    gamerulesCollection.forEach((rule) => {
      API.post('AWS-HMG-URL', '/gameRule', { body: { ...rule } })
        .then(response => console.log('Created A Rule!', response))
        .catch(({ response }) => {
          console.log(`Error(${response.status}): ${response.data.message}`);
        });
    });
  };

  const deleteGameRules = async () => {
    const rules = await listGameRules();
    rules.forEach(({ id }) => {
      API.post('AWS-HMG-URL', '/delete-gamerule', { body: { id } })
        .then(response => console.log('Deleted A Beast!', response))
        .catch(({ response }) => {
          console.log(`Error(${response.status}): ${response.data.message}`);
        });
    });
  };

  const listGameRules = async () => API.get('AWS-HMG-URL', '/list-gameRules')
    .then(response => response)
    .catch(e => console.log(e));

  const createEverthing = () => {
    createBeasts();
    createAugment();
    createFaction();
    createRift();
    createOverview();
    createGameRules();
  };

  const deleteEverything = () => {
    deleteBeasts();
    deleteAugment();
    deleteFaction();
    deleteRift();
    deleteOverview();
    deleteGameRules();
  };

  return (
    <Container style={{ padding: '4rem 0' }}>
      <Row>
        <Col sm={3}>
          <Button onClick={createBeasts}>Load Original Beast Data</Button>
        </Col>
        <Col sm={3}>
          <Button onClick={deleteBeasts}>Delete *ALL* Beast Data</Button>
        </Col>
        <Col sm={3}>
          <Button onClick={createAugment}>Load Original Augment Data</Button>
        </Col>
        <Col sm={3}>
          <Button onClick={deleteAugment}>Delete *ALL* Augment Data</Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={3}>
          <Button onClick={createFaction}>Load Original Faction Data</Button>
        </Col>
        <Col sm={3}>
          <Button onClick={deleteFaction}>Delete *ALL* Faction Data</Button>
        </Col>
        <Col sm={3}>
          <Button onClick={createRift}>Load Original Rift Data</Button>
        </Col>
        <Col sm={3}>
          <Button onClick={deleteRift}>Delete *ALL* Rift Data</Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={3}>
          <Button onClick={createOverview}>Load Original Overivew Data</Button>
        </Col>
        <Col sm={3}>
          <Button onClick={deleteOverview}>Delete *ALL* Overview Data</Button>
        </Col>
        <Col sm={3}>
          <Button onClick={createGameRules}>Load Original Game Rules Data</Button>
        </Col>
        <Col sm={3}>
          <Button onClick={deleteGameRules}>Delete *ALL* Game Rules Data</Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6}>
          <Button onClick={createEverthing}>CREATE EVERYTHING</Button>
        </Col>
        <Col sm={6}>
          <Button onClick={deleteEverything}>DELETE EVERYTHING</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
