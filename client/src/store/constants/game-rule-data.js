export default [
  {
    name: 'Setup',
    text:
    [
      'Choose a Monster and Augment to play with.           ',
      'Any Augment can be used with any Monster.',
      'Each player can only use one monster per game (unless you agree otherwise).',
      'Players can trade augments (or Monsters!) between each other before the game starts.',
      'Players can also bet Augments or Monsters as prizes for winning.',
      'Each player chooses a Faction starting point to start from (see Faction start discs).',
      'Creatures with the highest speed go first. If in doubt, do scissors-paper-rock and play continues clockwise around the board)',
    ]
  },
  {
    name: 'Game Modes',
    gamemodes:
    [
      {
        name: 'The Rift',
        text:
          [
            'All out war across the campus.',
            'Creatures respawn infinitely.',
            'First Faction to five kills wins.',
          ],
      },
      {
        name: 'The Tower Tyrant',
        text:
          [
            'The goal is to capture V Block.',
            'The Faction with the last creature/s alien in V block wins the round.',
            'Once killed, creatures do not respawn.',
            'Best out of three rounds is the overall winner of the Block Capture Battle.',
          ],
      },
      {
        name: 'Hunt for Humans',
        text:
          [
            'Scatter the "Prey" (human) tokens evenly around the map, both inside and outside of buildings (cannot be in the startinng buildings)',
            'Every time your Monster touches Prey, remove the Prey and gain one experience. The gatekeepers "save" them instead, but follow the same rules',
            'The game ends when all Prey is consumed or saved - Faction with the most Prey tokens wins.',
          ],
      },
    ]
  },
  {
    name: 'How to Win!',
    text:
      [
        'To win, players must accomplish the objective determined by the Game Mode (outlined below). This includes, but is not limited to, eliminating all other opponents, reaching a set number of kills, or completing an agreed upon objective (capture the flag, interrogate the humans, etc.).',
        'The basic game mode for your first game will be one-life elimination-style Deathmatch (good for practice purposes).',
      ]
  },
  {
    name: 'Attacking and Health Points',
    text:
      [
        'Your monster can attack one target at any point of its movement for that turn.',
        'Extra Action augment allows two attacks per turn.',
        `A Monster's DAMAGE is subtracted from the HEALTH POINTS (HP) of the monster it's attacking.`,
        'The monster token must make physical contact during the move for the attack to hit.',
      ]
  },
  {
    name: 'Death and Experience',
    text:
      [
        'Monsters gain Experience Points by killing other monsters, or from attending one of the weekly Battle for the Block events.',
        'Use these Experience Points to fill in the blank squares on your Monster’s card, in sequence, slowly gaining more damage, speed, leap, and health over time.',
        'Killing a monster or playing in a Battle for the Block earns 2 Experience.',
        'If your Monster runs out of Health Points (HP), then it dies and returns to your Faction’s starting point at the start of your next turn. (EXCEPTION: not in Tyrant of the Block games).',
        'You cannot upgrade a skill twice at one time; when you receive 2 Experience or more, you must spread it around the attributes on your Monster’s card.',
        'If your creature dies, it gains 1 Experience before respawning.',
        'Experience gained from kills immediately improves the creature, and also tops up its health to that new level, but not back to full health.',
      ]
  }
]