export const TITLES = [
  {
    id: 'novice',
    name: 'Novice',
    stats: {
      yenGain: 0.05,
      experienceGain: 0.05,
    },
    requirements: [{ name: 'Reach level 100' }],
  },
  {
    id: 'treasurer-hunter',
    name: 'Treasurer Hunter',
    stats: {
      yenGain: 0.05,
      crystalGain: 0.05,
      droprate: 0.1,
    },
    requirements: [
      { name: 'Obtain 7 Rare Chests' },
      { name: 'Obtain 5 Epic Chests' },
      { name: 'Obtain 3 Legendary Chests' },
      { name: 'Obtain Mythical Chest' },
    ],
  },
  {
    id: 'flame-warrior',
    name: 'Flame Warrior',
    stats: {
      overallDamage: 0.1,
      movementSpeed: 0.07,
      lifesteal: 0.02,
    },
    requirements: [
      { name: 'Defeat Shinra 5 times' },
      { name: 'Spawn Shinra 2 times' },
    ],
  },
  {
    id: 'spirit-breaker',
    name: 'Spirit Breaker',
    stats: {
      overallDamage: 0.15,
      damageReduction: 0.1,
      droprate: 0.12,
    },
    requirements: [
      { name: 'Defeat Toji 15 times' },
      { name: 'Obtain 5 Inverted Fragments' },
      { name: 'Obtain Heavenly Seal' },
    ],
  },
  {
    id: 'haki-master',
    name: 'Haki Master',
    stats: {
      overallDamage: 0.16,
      movementSpeed: 0.1,
      fameGain: 0.15,
    },
    requirements: [
      { name: 'Defeat Mihawk 10 times' },
      { name: 'Unlock Haki Stage 1' },
      { name: 'Unlock Flash Step' },
    ],
  },
  {
    id: 'king-successor',
    name: `King's Successor`,
    stats: {
      overallDamage: 0.18,
      damageReduction: 0.12,
      movementSpeed: 0.12,
    },
    requirements: [
      { name: 'Defeat Shanks 10 times' },
      { name: 'Obtain 25 Haki Fragments' },
      { name: `Obtain Shank's Saber` },
    ],
  },
  {
    id: 'king-of-curses',
    name: 'King of Curses',
    stats: {
      overallDamage: 0.2,
      damageReduction: 0.14,
      movementSpeed: 0.12,
      droprate: 0.1,
    },
    requirements: [
      { name: 'Defeat Sukuna 15 times' },
      { name: `Obtain Sukuna's Flesh` },
      { name: 'Obtain Vessel' },
    ],
  },
  {
    id: 'safebound',
    name: 'Safebound',
    stats: {
      yenGain: 0.2,
      crystalGain: 0.2,
      droprate: 0.15,
    },
    requirements: [{ name: 'Unlock 1st Storage Slots' }],
  },
  {
    id: 'awakened',
    name: 'Awakened',
    stats: {
      overallDamage: 0.22,
      damageReduction: 0.16,
      movementSpeed: 0.15,
    },
    requirements: [{ name: 'Unlock Haki Stage 2' }],
  },
  {
    id: 'black-swordsman',
    name: 'Black Swordsman',
    stats: {
      overallDamage: 0.25,
      damageReduction: 0.19,
      movementSpeed: 0.2,
      dashPower: 0.2,
    },
    requirements: [
      { name: 'Defeat Kirito 25 times' },
      { name: 'Obtain Elucidator' },
      { name: 'Obtain Dark Repulser' },
      { name: `Obtain Kirito's Coat` },
    ],
  },
  {
    id: 'god-of-festival',
    name: 'God of Festival',
    stats: {
      overallDamage: 0.27,
      damageReduction: 0.22,
      movementSpeed: 0.25,
      dashPower: 0.1,
      yenGain: 0.1,
    },
    requirements: [
      { name: 'Defeat Tengen 10 times' },
      { name: `Obtain Tengen's Outfit` },
    ],
  },
  {
    id: 'heaven-fallen-blade',
    name: `Heaven's Fallen Blade`,
    rarity: 'limited',
    availability: 'unobtainable',
    stats: {
      overallDamage: 0.3,
      damageReduction: 0.25,
      movementSpeed: 0.295,
      dashPower: 0.135,
      fameGain: 0.2,
    },
    requirements: [
      { name: 'Defeat Reanimated Toji 15 times' },
      { name: 'Obtain Reanimated Toji' },
      { name: `Obtain Toji's Fit` },
    ],
  },
  {
    id: 'honoured-one',
    name: 'Honoured One',
    stats: {
      overallDamage: 0.295,
      damageReduction: 0.24,
      movementSpeed: 0.2,
      fameGain: 0.25,
    },
    requirements: [
      { name: 'Defeat Gojo 15 times' },
      { name: `Obtain Gojo's Uniform` },
      { name: 'Obtain Gojo' },
    ],
  },
  {
    id: 'true-vessel',
    name: 'True Vessel',
    stats: {
      overallDamage: 0.32,
      damageReduction: 0.27,
      movementSpeed: 0.27,
      experienceGain: 0.25,
      fameGain: 0.3,
      lifesteal: 0.08,
    },
    requirements: [
      { name: 'Defeat Ryomen Sukuna 15 times' },
      { name: 'Obtain Ryomen Sukuna' },
      { name: `Obtain Sukuna's Kimono` },
    ],
  },
  {
    id: 'divine-general',
    name: 'Divine General',
    stats: {
      overallDamage: 0.4,
      damageReduction: 0.3,
      cooldownReduction: 0.2,
    },
    requirements: [
      { name: 'Defeat Mahoraga 10 times' },
      { name: `Obtain Mahoraga's Wheel` },
      { name: 'Obtain Divine Aura' },
    ],
  },
  {
    id: 'blood-red-commander',
    name: 'Blood Red Commander',
    stats: {
      overallDamage: 0.355,
      damageReduction: 0.28,
      movementSpeed: 0.3,
      dashPower: 0.15,
      fameGain: 0.35,
    },
    requirements: [
      { name: 'Obtain Bloodath Armor' },
      { name: 'Igris' },
      { name: 'Equip Crimson Knight' },
    ],
  },
  {
    id: 'system-chosen',
    name: `System's Chosen`,
    stats: {
      overallDamage: 0.385,
      damageReduction: 0.3,
      movementSpeed: 0.35,
      dashPower: 0.2,
      fameGain: 0.4,
      cooldownReduction: 0.05,
    },
    requirements: [
      { name: 'Obtain Sung Jin-woo' },
      { name: `Obtain Sun Jin-woo's Outfit` },
      { name: 'Equip Reawakened' },
    ],
  },
  {
    id: 'ant-king',
    name: 'Ant King',
    stats: {
      overallDamage: 0.6,
      damageReduction: 0.5,
      droprate: 0.2,
      cooldownReduction: 0.25,
    },
    requirements: [
      { name: 'Defeat Beru 10 times' },
      { name: 'Obtain Beru Armor (Green)' },
      { name: 'Equip Evolved Ant' },
    ],
  },
  {
    id: 'upper-rank-six',
    name: 'Upper Rank Six',
    stats: {
      overallDamage: 0.425,
      damageReduction: 0.325,
      movementSpeed: 0.35,
      dashPower: 0.2,
      fameGain: 0.45,
      lifesteal: 0.085,
      cooldownReduction: 0.05,
    },
    requirements: [
      { name: 'Defeat Gyutaro 25 times' },
      { name: `Obtain Gyutaro's Fit` },
      { name: 'Equip Blood Frenzy' },
    ],
  },
  {
    id: 'destructive-death',
    name: 'Destructive Death',
    stats: {
      overallDamage: 0.485,
      damageReduction: 0.38,
      movementSpeed: 0.375,
      dashPower: 0.25,
    },
    requirements: [
      { name: 'Defeat Akaza 40 times' },
      { name: `Obtain Akaza's Haori` },
      { name: 'Equip Martial Artist' },
    ],
  },
  {
    id: 'supreme-ant-king',
    name: 'Supreme Ant King',
    stats: {
      overallDamage: 0.6,
      damageReduction: 0.5,
      droprate: 0.2,
      cooldownReduction: 0.25,
    },
    requirements: [
      { name: 'Defeat Beru 25 times' },
      { name: 'Obtain Beru Armor (Green)' },
      { name: 'Obtain Beru Armor (Golden)' },
      { name: 'Obtain Beru Armor (Red)' },
      { name: 'Obtain Beru Armor (Blue)' },
      { name: 'Obtain Beru Armor (Purple)' },
    ],
  },
  {
    id: 'tear-of-despair',
    name: 'Tear of Despair',
    stats: {
      overallDamage: 0.55,
      damageReduction: 0.4,
      movementSpeed: 0.4,
      dashPower: 0.3,
      lifesteal: 0.065,
      cooldownReduction: 0.075,
    },
    requirements: [
      { name: 'Defeat Ulquiorra 75 times' },
      { name: `Obtain Ulquiorra's Uniform` },
      { name: 'Equip Hollow Instinct' },
    ],
  },
];
