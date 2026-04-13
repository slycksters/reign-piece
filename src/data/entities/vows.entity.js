export const VOWS = [
  {
    id: 'heavenly-restriction',
    name: 'Heavenly Restriction',
    buffs: {
      overallDamage: 0.2,
      damageReduction: 0.1,
      movementSpeed: 0.305,
      dashPower: 0.2,
    },
    debuffs: {
      additionals: ['Prevents the use of all power-based abilities'],
    },
    bindMethod: [
      'Obtained from the Vow of Heavenly Restriction: Binding questline',
    ],
    unbindMethod: [
      'Removed upon completing the Vow of Heavenly Restriction: Unbinding questline',
    ],
  },
  {
    id: 'adaptation',
    name: 'Adaptation',
    buffs: {},
    specialEffects: ['Nullifies the 2nd hit if player is hit by the same move'],
    debuffs: {
      additionals: ['None'],
    },
    bindMethod: ['Obtained from the Vow of Adaptation: Binding questline'],
    unbindMethod: [
      'Removed upon completing the Vow of Adaptation: Unbinding questline',
    ],
  },
  {
    id: 'berserker',
    name: 'Berserker',
    buffs: {},
    specialEffects: [
      'Gain +0.5% overall damage per kill, up to a maximum of +30%',
    ],
    debuffs: {
      additionals: ['Resets all stacks on logout, death, or respawn'],
    },
    bindMethod: ['Obtained from the Vow of Berserker: Binding questline'],
    unbindMethod: [
      'Removed upon completing the Vow of Berserker: Unbinding questline',
    ],
  },
  {
    id: 'emptiness',
    name: 'Emptiness',
    buffs: {
      overallDamage: 0.3,
      damageReduction: 0.35,
      movementSpeed: 0.15,
      dashPower: 0.2,
    },
    specialEffects: [
      'Every 49th hit triggers a scream, dealing damage to nearby enemies',
    ],
    debuffs: {
      defense: -0.2,
    },
    bindMethod: ['Obtained from the Vow of Emptiness: Binding questline'],
    unbindMethod: [
      'Removed upon completing the Vow of Emptiness: Unbinding questline',
    ],
  },
];
