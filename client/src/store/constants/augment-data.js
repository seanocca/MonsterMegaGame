export default [
  { faction: 'Mechanica',
    augments: [{
      type: 'Cybernetics',
      name: 'Extra Limbs',
      action: 'Tap',
      desc: 'Take an extra attack or move.',
    },
    {
      type: 'Cybernetics',
      name: 'Subdermal Plating',
      action: 'Passive',
      desc: 'Begin all games with double health',
    },
    {
      type: 'Cybernetics',
      name: 'Nanorepair Module',
      action: 'Passive',
      desc: 'Regains One health point',
    }
  ]},
  { faction: 'Biochrondys',
    augments: [{
      type: 'Mutation',
      name: 'Retractable Claws',
      action: 'Passive',
      desc: `Doesn't fall when finishing move on a wall.`,
    },
    {
      type: 'Mutation',
      name: 'Modified Muscle',
      action: 'Tap',
      desc: 'Take an extra action.',
    },
    {
      type: 'Mutation',
      name: 'Refractive Tissue',
      action: 'Tap',
      desc: 'Cannot be attacked until you untap or take an action.',
    }
  ]},
  { faction: 'Voidborn',
    augments: [{
      type: 'Lens',
      name: 'Unphase',
      action: 'Tap',
      desc: 'Teleport to anywhere on the map. Monsters cannot attack immediately after use.',
    },
    {
      type: 'Lens',
      name: 'Gravitybend',
      action: 'Tap',
      desc: 'All monsters must move a direction of your choice until they hit an object on the map.',
    },
    {
      type: 'Lens',
      name: 'Reversion',
      action: 'Tap',
      desc: 'Returns monster to location before their last move.',
    }
  ]},
  { faction: 'Gatekeeper',
    augments: [{
      type: 'Tactics',
      name: 'Decisive Action',
      action: 'Tap',
      desc: 'Move twice speed.',
    },
    {
      type: 'Tactics',
      name: 'Full Assault',
      action: 'Tap',
      desc: 'Double attack.',
    },
    {
      type: 'Tactics',
      name: 'Mimic Manoeuvre',
      action: 'Tap',
      desc: 'For one turn only, you can mimic another playing monster ability or augment.',
    }
  ]},
]