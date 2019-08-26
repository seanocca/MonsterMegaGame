import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useFormInput, useNumericFormInput } from '../helpers/hooks';

const AdminBeastForm = (props) => {
  const { id, onFormClose, onFormSubmit } = props;
  const name = useFormInput(props.name);
  const desc = useFormInput(props.desc);
  const move = useFormInput(props.move);
  const damage = useNumericFormInput(props.damage);
  const maxdmg = useNumericFormInput(props.maxdmg);
  const speed = useNumericFormInput(props.speed);
  const maxspeed = useNumericFormInput(props.maxspeed);
  const leap = useFormInput(props.leap);
  const maxleap = useFormInput(props.maxleap);
  const hp = useFormInput(props.hp);
  const maxhp = useFormInput(props.maxhp);
  const faction = useFormInput(props.faction);

  const handleSubmit = () => {
    onFormSubmit({
      beast: {
        id,
        name: name.value,
        desc: desc.value,
        move: move.value,
        damage: damage.value,
        maxdmg: maxdmg.value,
        leap: leap.value,
        maxleap: maxleap.value,
        hp: hp.value,
        maxhp: maxhp.value,
        speed: speed.value,
        maxspeed: maxspeed.value,
      },
      faction: faction.value,
    });
  };

  const submitText = props.id ? 'Update' : 'Create';
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="faction">
          <Form.Label>Faction</Form.Label>
          <Form.Control
            as="select"
            {...faction}
          >
            <option value="">Choose Faction...</option>
            <option value="Mechanica">Mechanica</option>
            <option value="Gatekeeper">Gatekeeper</option>
            <option value="Voidborn">Voidborn</option>
            <option value="Biochrondys">Biochrondys</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Beast Name" {...name} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control placeholder="Beast Description" {...desc} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="damage">
          <Form.Label>Damage</Form.Label>
          <Form.Control
            as="input"
            type="number"
            {...damage}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="maxdmg">
          <Form.Label>Max Dmg</Form.Label>
          <Form.Control
            as="input"
            type="number"
            {...maxdmg}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="speed">
          <Form.Label>Speed</Form.Label>
          <Form.Control
            as="input"
            type="number"
            {...speed}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="speed">
          <Form.Label>Max Speed</Form.Label>
          <Form.Control
            as="input"
            type="number"
            {...maxspeed}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="leap">
          <Form.Label>Leap</Form.Label>
          <Form.Control
            as="input"
            type="number"
            {...leap}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="maxleap">
          <Form.Label>Max Leap</Form.Label>
          <Form.Control
            as="input"
            type="number"
            {...maxleap}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="hp">
          <Form.Label>HP</Form.Label>
          <Form.Control
            as="input"
            type="number"
            {...hp}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="maxhp">
          <Form.Label>Max HP</Form.Label>
          <Form.Control
            as="input"
            type="number"
            {...maxhp}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="move">
          <Form.Label>Move</Form.Label>
          <Form.Control
            {...move}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Button type="button" onSubmit={handleSubmit}>
          {submitText}
        </Button>
        <Button variant="danger" type="button" onClick={onFormClose}>
          Cancel
        </Button>
      </Form.Row>
    </Form>
  );
};

export default AdminBeastForm;
