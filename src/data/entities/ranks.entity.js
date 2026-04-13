export const RANKS = [
  {
    id: 'rank-none',
    name: 'None',
    description: 'The starting rank, does not provide any buffs.',
    stats: {},
    requirements: [],
  },
  {
    id: 'lost-soul',
    name: 'Lost Soul',
    stats: {
      crystalGain: 0.05,
      experienceGain: 0.05,
      defense: 0.1,
    },
    requirements: [
      { targetId: 'bounty-poster', quantity: 40 },
      { targetId: 'haki-fragment', quantity: 100 },
    ],
  },
  {
    id: 'hollow',
    name: 'Hollow',
    stats: {
      overallDamage: 0.1,
      yenGain: 0.1,
      crystalGain: 0.1,
      experienceGain: 0.1,
      defense: 0.2,
    },
    requirements: [
      { targetId: 'adolla-fragment', quantity: 50 },
      { targetId: 'inverted-fragment', quantity: 75 },
    ],
  },
  {
    id: 'adjuchas',
    name: 'Adjuchas',
    stats: {
      overallDamage: 0.15,
      damageReduction: 0.05,
      yenGain: 0.2,
      crystalGain: 0.2,
      experienceGain: 0.2,
      defense: 0.33,
    },
    requirements: [
      { targetId: 'elucidator', quantity: 5 },
      { targetId: 'dark-repulser', quantity: 5 },
      { targetId: 'haki-orb', quantity: 9 },
    ],
  },
  {
    id: 'vasto-lorde',
    name: 'Vasto Lorde',
    stats: {
      overallDamage: 0.25,
      damageReduction: 0.15,
      yenGain: 0.3,
      crystalGain: 0.3,
      experienceGain: 0.35,
      droprate: 0.05,
      defense: 0.48,
    },
    requirements: [
      { targetId: 'explosive-rhythm-fragment', quantity: 7 },
      { targetId: 'flash-sigil', quantity: 10 },
      { targetId: 'voltage-core', quantity: 30 },
    ],
  },
  {
    id: 'fraccion',
    name: 'Fraccion',
    stats: {
      overallDamage: 0.4,
      damageReduction: 0.275,
      yenGain: 0.4,
      crystalGain: 0.4,
      experienceGain: 0.5,
      droprate: 0.15,
      defense: 0.63,
    },
    requirements: [
      { targetId: 'king-will-shard', quantity: 20 },
      { targetId: 'infinity-residue', quantity: 30 },
      { targetId: 'six-eye-mark', quantity: 10 },
    ],
  },
  {
    id: 'espada',
    name: 'Espada',
    stats: {
      overallDamage: 0.55,
      damageReduction: 0.415,
      yenGain: 0.5,
      crystalGain: 0.5,
      experienceGain: 0.65,
      droprate: 0.25,
      defense: 0.78,
    },
    requirements: [
      { targetId: 'finger-box', quantity: 15 },
      { targetId: 'heian-era-scripture', quantity: 5 },
      { targetId: 'black-flash-fragment', quantity: 40 },
      { targetId: 'cursed-core', quantity: 20 },
    ],
  },
];
