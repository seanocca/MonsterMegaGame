import React from 'react';
import ReactDOM from 'react-dom';
import BeastCard from '../components/BeastCard';

it('renders a Biochrondys beast', () => {
  const props = {
    faction: 'Biochrondys',
    name: 'Carnosaur',
    desc: 'Agile Predator',
    image: '',
    move: 'Jumps from rooftop to rooftop',
    damage: '1',
    maxdmg: '5',
    leap: '2',
    maxleap: '6',
    hp: '1',
    maxhp: '5',
    speed: '3',
    maxspeed: '7',
  };
  const div = document.createElement('div');
  ReactDOM.render(<BeastCard {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});