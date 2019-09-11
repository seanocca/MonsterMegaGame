export default [
  {
    id: 'setup123',
    name: 'Setup',
    text:
    [
      {
        id: 'setup1',
        line: 'Choose a Monster and Augment to play with.',
      },
      {
        id: 'setup2',
        line: 'Any Augment can be used with any Monster.',
      },
      {
        id: 'setup3',
        line: 'Each player can only use one monster per game (unless you agree otherwise).',
      },
      {
        id: 'setup4',
        line: 'Players can trade augments (or Monsters!) between each other before the game starts.',
      },
      {
        id: 'setup5',
        line: 'Players can also bet Augments or Monsters as prizes for winning.',
      },
      {
        id: 'setup6',
        line: 'Each player chooses a Faction starting point to start from (see Faction start discs).',
      },
      {
        id: 'setup7',
        line: 'Creatures with the highest speed go first. If in doubt, do scissors-paper-rock and play continues clockwise around the board)',
      },
    ],
  },
  {
    id: 'gameModes456',
    name: 'Game Modes',
    gamemodes:
    [
      {
        id: 'gm123',
        name: 'The Rift',
        text:
          [
            {
              id: 'rift1',
              line: 'All out war across the campus.',
            },
            {
              id: 'rift2',
              line: 'Creatures respawn infinitely.',
            },
            {
              id: 'rift3',
              line: 'First Faction to five kills wins.',
            },
          ],
      },
      {
        id: 'gm456',
        name: 'The Tower Tyrant',
        text:
          [
            {
              id: 'tower1',
              line: 'The goal is to capture V Block.',
            },
            {
              id: 'tower2',
              line: 'The Faction with the last creature/s alien in V block wins the round.',
            },
            {
              id: 'tower3',
              line: 'Once killed, creatures do not respawn.',
            },
            {
              id: 'tower4',
              line: 'Best out of three rounds is the overall winner of the Block Capture Battle.',
            },
          ],
      },
      {
        id: 'gm789',
        name: 'Hunt for Humans',
        text:
          [
            {
              id: 'hunt1',
              line: 'Scatter the "Prey" (human) tokens evenly around the map, both inside and outside of buildings (cannot be in the startinng buildings)',
            },
            {
              id: 'hunt2',
              line: 'Every time your Monster touches Prey, remove the Prey and gain one experience. The gatekeepers "save" them instead, but follow the same rules',
            },
            {
              id: 'hunt3',
              line: 'The game ends when all Prey is consumed or saved - Faction with the most Prey tokens wins.',
            },
          ],
      },
    ],
  },
  {
    id: '789',
    name: 'How to Win!',
    text:
      [
        {
          id: 'how1',
          line: 'To win, players must accomplish the objective determined by the Game Mode (outlined below). This includes, but is not limited to, eliminating all other opponents, reaching a set number of kills, or completing an agreed upon objective (capture the flag, interrogate the humans, etc.).',
        },
        {
          id: 'how2',
          line: 'The basic game mode for your first game will be one-life elimination-style Deathmatch (good for practice purposes).',
        },
      ],
  },
  {
    id: '012',
    name: 'Attacking and Health Points',
    text:
      [
        {
          id: 'attack1',
          line: 'Your monster can attack one target at any point of its movement for that turn.',
        },
        {
          id: 'attack2',
          line: 'Extra Action augment allows two attacks per turn.',
        },
        {
          id: 'attack3',
          line: 'A Monster\'s DAMAGE is subtracted from the HEALTH POINTS (HP) of the monster it\'s attacking.',
        },
        {
          id: 'attack4',
          line: 'The monster token must make physical contact during the move for the attack to hit.',
        },
      ],
  },
  {
    id: '345',
    name: 'Death and Experience',
    text:
      [
        {
          id: 'death1',
          line: 'Monsters gain Experience Points by killing other monsters, or from attending one of the weekly Battle for the Block events.',
        },
        {
          id: 'death2',
          line: 'Use these Experience Points to fill in the blank squares on your Monster’s card, in sequence, slowly gaining more damage, speed, leap, and health over time.',
        },
        {
          id: 'death3',
          line: 'Killing a monster or playing in a Battle for the Block earns 2 Experience.',
        },
        {
          id: 'death4',
          line: 'If your Monster runs out of Health Points (HP), then it dies and returns to your Faction’s starting point at the start of your next turn. (EXCEPTION: not in Tyrant of the Block games).',
        },
        {
          id: 'death5',
          line: 'You cannot upgrade a skill twice at one time; when you receive 2 Experience or more, you must spread it around the attributes on your Monster’s card.',
        },
        {
          id: 'death6',
          line: 'If your creature dies, it gains 1 Experience before respawning.',
        },
        {
          id: 'death7',
          line: 'Experience gained from kills immediately improves the creature, and also tops up its health to that new level, but not back to full health.',
        },
      ],
  },
];
