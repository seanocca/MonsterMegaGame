import CarnosaurImg from '../../images/beasts/Carnosaur.png';
import AbyssateImg from '../../images/beasts/Abyssate.png';
import VaulterixImg from '../../images/beasts/Vaulterix.png';
import InfiltratorsImg from '../../images/beasts/Infiltrators.png';
import ContainmentImg from '../../images/beasts/Containment.png';
import TacticalTeamImg from '../../images/beasts/TacticalTeam.png';
import ClambererImg from '../../images/beasts/Clamberer.png';
import BastionImg from '../../images/beasts/Bastion.png';
import SubterrakImg from '../../images/beasts/Subterrak.png';
import AxialBeastImg from '../../images/beasts/AxialBeast.png';
import NodeHorrorImg from '../../images/beasts/NodeHorror.png';
import NexusHivemindImg from '../../images/beasts/NexusHivemind.png';

import BiochrondysLogo from '../../images/logos/biochrondys.png';
import GatekeepersLogo from '../../images/logos/gatekeepers.png';
import MechanicaLogo from '../../images/logos/mechanica.png';
import VoidbornLogo from '../../images/logos/voidborn.png';

export default [
  {
    faction: 'Biochrondys',
    logo: BiochrondysLogo,
    beasts: [
      {
        id: '33525fde-c793-11e9-aa8c-2a2ae2dfcce4',
        name: 'Carnosaur',
        desc: 'Agile Predator',
        image: CarnosaurImg,
        move: 'Jumps from rooftop to rooftop',
        damage: '1',
        maxdmg: '5',
        leap: '2',
        maxleap: '6',
        hp: '1',
        maxhp: '5',
        speed: '3',
        maxspeed: '7',
      },
      {
        id: '3b25a1da-c793-11e9-aa8c-2f2ae2dbcce4',
        name: 'Abyssate',
        desc: 'Leaping Carnivore',
        image: AbyssateImg,
        move: 'Moves instantly from ground to rooftops',
        damage: '2',
        maxdmg: '6',
        leap: '3',
        maxleap: '7',
        hp: '2',
        maxhp: '6',
        speed: '4',
        maxspeed: '8',
      },
      {
        id: '416453ac-c793-11f9-aa8c-2a2ae2dbcce4',
        name: 'Vaulterix',
        desc: 'Apex Draconian',
        image: VaulterixImg,
        move: 'Fly\'s in any direction at any time.',
        damage: '3',
        maxdmg: '7',
        leap: '0',
        maxleap: '0',
        hp: '3',
        maxhp: '7',
        speed: '5',
        maxspeed: '9',
      },
    ],
  },
  {
    faction: 'Gatekeepers',
    logo: GatekeepersLogo,
    beasts: [
      {
        id: '529d4e12-c793-11e9-aa8c-2a2ae2dbccef',
        name: 'Infiltrators',
        desc: 'Hunt and Track (Unit of 4)',
        image: InfiltratorsImg,
        move:
          'Each turn, one unit can zipline to any surface in line of sight.',
        damage: '1',
        maxdmg: '5',
        leap: '1',
        maxleap: '5',
        hp: '1',
        maxhp: '0',
        speed: '2',
        maxspeed: '0',
      },
      {
        id: '5f28cc30-c793-11e9-aa8c-2a2ae2dbcce4',
        name: 'Containment',
        desc: 'Search and Capture (Unit of 4)',
        image: ContainmentImg,
        move: 'Runs along walls.',
        damage: '1',
        maxdmg: '5',
        leap: '2',
        maxleap: '6',
        hp: '2',
        maxhp: '0',
        speed: '3',
        maxspeed: '0',
      },
      {
        id: '5d7322bc-c793-1de9-aa8c-2a2ae2dbcce4',
        name: 'Tactical Team',
        desc: 'Seek and Destroy (Unit of 4)',
        image: TacticalTeamImg,
        move: 'Can move down streets through the air as movement.',
        damage: '1',
        maxdmg: '5',
        leap: '3',
        maxleap: '7',
        hp: '3',
        maxhp: '0',
        speed: '4',
        maxspeed: '0',
      },
    ],
  },
  {
    faction: 'Mechanica',
    logo: MechanicaLogo,
    beasts: [
      {
        id: '659051d6-c793-11e9-ad8c-2a2ae2dbcce4',
        name: 'Clamberer',
        desc: 'Four-Armed Automation',
        image: ClambererImg,
        move: 'Climbs the sides of buildings.',
        damage: '2',
        maxdmg: '6',
        leap: '1',
        maxleap: '5',
        hp: '2',
        maxhp: '6',
        speed: '2',
        maxspeed: '6',
      },
      {
        id: '6ddff83c-c793-11e9-aadc-2a2ae2dbcce4',
        name: 'Bastion',
        desc: 'Armoured Hulk',
        image: BastionImg,
        move: 'Smashes through walls.',
        damage: '3',
        maxdmg: '7',
        leap: '1',
        maxleap: '5',
        hp: '3',
        maxhp: '7',
        speed: '2',
        maxspeed: '6',
      },
      {
        id: '76d7d3f6-c793-11e9-aa8d-2a2ae2dbcce4',
        name: 'Subterrak',
        desc: 'Tunneling Behemoth',
        image: SubterrakImg,
        move: 'Dissapear underground.\nDisappear overground.',
        damage: '4',
        maxdmg: '8',
        leap: '1',
        maxleap: '5',
        hp: '4',
        maxhp: '12',
        speed: '2',
        maxspeed: '6',
      },
    ],
  },
  {
    faction: 'Voidborn',
    logo: VoidbornLogo,
    beasts: [
      {
        id: 'e044570c-c793-11e9-aa8c-2a2ae2dbcce4',
        name: 'Axial Beast',
        desc: 'Phase Creature',
        image: AxialBeastImg,
        move: 'Phases through walls.',
        damage: '2',
        maxdmg: '6',
        leap: '1',
        maxleap: '5',
        hp: '1',
        maxhp: '5',
        speed: '2',
        maxspeed: '6',
      },
      {
        id: '85eacf60-e793-11e9-aa8c-2a2ae2dbcce4',
        name: 'Node Horror',
        desc: 'Transdimensional Hunter',
        image: NodeHorrorImg,
        move: 'Phases from one wall to any other wall on the map.',
        damage: '3',
        maxdmg: '7',
        leap: '1',
        maxleap: '5',
        hp: '2',
        maxhp: '6',
        speed: '2',
        maxspeed: '6',
      },
      {
        id: '912e1706-c793-e1e9-aa8c-2a2ae2dbcce4',
        name: 'Nexus Hivemind',
        desc: 'Ominscient Horror',
        image: NexusHivemindImg,
        move: 'Teleports to any point on the map.',
        damage: '4',
        maxdmg: '8',
        leap: '1',
        maxleap: '5',
        hp: '3',
        maxhp: '7',
        speed: '1',
        maxspeed: '5',
      },
    ],
  },
];
