import ExtraLimbsImg from '../../images/augments/ExtraLimbs.png';
import SubdermalPlatingImg from '../../images/augments/SubdermalPlating.png';
import NanorepairModuleImg from '../../images/augments/NanorepairModule.png';
import RetractableClawsImg from '../../images/augments/RetractableClaws.png';
import ModifiedMuscleImg from '../../images/augments/ModifiedMuscle.png';
import RefractiveTissueImg from '../../images/augments/RefractiveTissue.png';
import UnphaseImg from '../../images/augments/Unphase.png';
import GravityBendImg from '../../images/augments/GravityBend.png';
import ReversionImg from '../../images/augments/Reversion.png';
import DecisiveActionImg from '../../images/augments/DecisiveAction.png';
import FullAssaultImg from '../../images/augments/FullAssault.png';
import MimicManoeuvreImg from '../../images/augments/MimicManoeuvre.png';

import BiochrondysLogo from '../../images/logos/biochrondys.png';
import GatekeepersLogo from '../../images/logos/gatekeepers.png';
import MechanicaLogo from '../../images/logos/mechanica.png';
import VoidbornLogo from '../../images/logos/voidborn.png';

export default [
  {
    faction: 'Biochrondys',
    logo: BiochrondysLogo,
    augments: [
      {
        id: 'cb979420-c794-11e9-aa8c-2a2ae2dbcce4',
        type: 'Mutation',
        name: 'Retractable Claws',
        image: RetractableClawsImg,
        action: 'Passive',
        desc: 'Doesn\'t fall when finishing move on a wall.',
      },
      {
        id: 'cffd4910-c794-11e9-aa8c-2a2ae2dbcce4',
        type: 'Mutation',
        name: 'Modified Muscle',
        image: ModifiedMuscleImg,
        action: 'Tap',
        desc: 'Take an extra action.',
      },
      {
        id: 'dd00cdbc-c794-11e9-aa8c-2a2ae2dbcce4',
        type: 'Mutation',
        name: 'Refractive Tissue',
        image: RefractiveTissueImg,
        action: 'Tap',
        desc: 'Cannot be attacked until you untap or take an action.',
      },
    ],
  },
  {
    faction: 'Gatekeepers',
    logo: GatekeepersLogo,
    augments: [
      {
        id: '244b8fae-c795-11e9-aa8c-2a2ae2dbcce4',
        type: 'Tactics',
        name: 'Decisive Action',
        image: DecisiveActionImg,
        action: 'Tap',
        desc: 'Move twice speed.',
      },
      {
        id: '2a26e004-c795-11e9-aa8c-2a2ae2dbcce4',
        type: 'Tactics',
        name: 'Full Assault',
        image: FullAssaultImg,
        action: 'Tap',
        desc: 'Double attack.',
      },
      {
        id: '3016d5dc-c795-11e9-aa8c-2a2ae2dbcce4',
        type: 'Tactics',
        name: 'Mimic Manoeuvre',
        image: MimicManoeuvreImg,
        action: 'Tap',
        desc: 'For one turn only, you can mimic another playing monster ability or augment.',
      },
    ],
  },
  {
    faction: 'Mechanica',
    logo: MechanicaLogo,
    augments: [
      {
        id: 'b660b708-c794-11e9-aa8c-2a2ae2dbcce4',
        type: 'Cybernetics',
        name: 'Extra Limbs',
        image: ExtraLimbsImg,
        action: 'Tap',
        desc: 'Take an extra attack or move.',
      },
      {
        id: 'bb6ecdc0-c794-11e9-aa8c-2a2ae2dbcce4',
        type: 'Cybernetics',
        name: 'Subdermal Plating',
        image: SubdermalPlatingImg,
        action: 'Passive',
        desc: 'Begin all games with double health',
      },
      {
        id: 'be6cf54c-c794-11e9-aa8c-2a2ae2dbcce4',
        type: 'Cybernetics',
        name: 'Nanorepair Module',
        image: NanorepairModuleImg,
        action: 'Passive',
        desc: 'Regains One health point',
      },
    ],
  },
  {
    faction: 'Voidborn',
    logo: VoidbornLogo,
    augments: [
      {
        id: 'e1dd3dac-c794-11e9-aa8c-2a2ae2dbcce4',
        type: 'Lens',
        name: 'Unphase',
        image: UnphaseImg,
        action: 'Tap',
        desc: 'Teleport to anywhere on the map. Monsters cannot attack immediately after use.',
      },
      {
        id: 'e823d3f6-c794-11e9-aa8c-2a2ae2dbcce4',
        type: 'Lens',
        name: 'Gravitybend',
        image: GravityBendImg,
        action: 'Tap',
        desc: 'All monsters must move a direction of your choice until they hit an object on the map.',
      },
      {
        id: 'eb393374-c794-11e9-aa8c-2a2ae2dbcce4',
        type: 'Lens',
        name: 'Reversion',
        image: ReversionImg,
        action: 'Tap',
        desc: 'Returns monster to location before their last move.',
      },
    ],
  },
];
