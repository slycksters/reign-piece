export const HEIRLOOMS = [
  {
    id: 'heirloom-of-ironclad',
    name: 'Heirloom of Ironclad',
    type: 'heirloom',
    rarity: 'ancient',
    stats: {
      damageReduction: 0.15,
      movementSpeed: -0.15,
      dashPower: -0.15,
    },
    stackLimit: 15,
    tradeable: true,
    image: null,
    description:
      'An unyielding relic forged for those who refuse to fall. It anchors the bearer in place like an immovable fortress, dulling incoming force at the cost of swiftness—power traded for absolute resilience.',
    obtainments: [{ targetId: 'meruem-boss' }],
  },
  {
    id: 'heirloom-of-phantom',
    name: 'Heirloom of Phantom',
    type: 'heirloom',
    rarity: 'ancient',
    stats: {
      damageReduction: -0.15,
      movementSpeed: 0.15,
      dashPower: 0.2,
    },
    stackLimit: 15,
    tradeable: true,
    image: null,
    description:
      'A fleeting essence that rejects solidity, allowing its bearer to slip through danger like a shadow. It favors speed and evasive bursts, abandoning protection in exchange for untouchable mobility.',
    obtainments: [{ targetId: 'gojo-boss' }, { targetId: 'slasher-boss' }],
  },
  {
    id: 'heirloom-of-wrath',
    name: 'Heirloom of Wrath',
    type: 'heirloom',
    rarity: 'ancient',
    stats: {
      overallDamage: 15,
      damageReduction: -15,
    },
    stackLimit: 15,
    tradeable: true,
    image: null,
    description:
      'A volatile fragment fueled by relentless fury. It amplifies destructive output to overwhelming levels, but leaves the bearer dangerously exposed—an embodiment of power without restraint.',
    obtainments: [
      { targetId: 'gyutaro-boss' },
      { targetId: 'malevolent-shrine-raid' },
      { targetId: 'infinity-castle-raid' },
      { targetId: 'blood-commander-raid' },
      { targetId: 'double-dungeon-raid' },
    ],
  },
  {
    id: 'heirloom-of-fortune',
    name: 'Heirloom of Fortune',
    type: 'heirloom',
    rarity: 'ancient',
    stats: {
      overallDamage: -0.3,
      damageReduction: -0.3,
      dropRate: 0.2,
    },
    stackLimit: 15,
    tradeable: true,
    image: null,
    description:
      'A peculiar charm that bends outcomes rather than battles. It weakens the bearer in direct combat, yet subtly alters fate itself—rewarding those willing to sacrifice strength for greater gains.',
    obtainments: [
      { targetId: 'ulquiorra-boss' },
      { targetId: 'aizen-boss' },
      { targetId: 'shadow-boss' },
      { targetId: 'las-noches-raid' },
    ],
  },
  {
    id: 'heirloom-of-greed',
    name: 'Heirloom of Greed',
    type: 'heirloom',
    rarity: 'ancient',
    stats: {
      overallDamage: -0.2,
      damageReduction: -0.2,
      yenGain: 0.5,
    },
    stackLimit: 15,
    tradeable: true,
    image: null,
    description:
      'A cursed token driven by insatiable desire. It siphons away combat efficiency in exchange for wealth, rewarding those who prioritize accumulation over survival—where every battle becomes a transaction.',
    obtainments: [{ targetId: 'sovereign-shadow-quest' }],
  },
];
