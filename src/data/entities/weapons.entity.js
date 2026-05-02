export const WEAPONS = [
  {
    id: 'katana',
    name: 'Katana',
    type: 'weapon',
    rarity: 'uncommon',
    tier: 'D',
    image: null,
    acquisition: [{ targetId: 'katana-seller' }],
    description:
      'Katana ability is a minimal, precision-based melee kit focused on clean sword techniques and straightforward ranged pressure. It centers around a single fundamental slash wave, emphasizing timing, spacing, and basic combat fundamentals rather than complex combos or utility.',
    performance: {
      scaling: 'Sword',
      difficulty: 1,
      damageLevel: 1,
      aoeSize: 1,
    },
    abilities: [
      {
        name: 'Z',
        cooldown: null,
        preview: null,
      },
    ],
  },
  {
    id: 'nanami-butcher',
    name: `Nanami's Butcher`,
    type: 'weapon',
    rarity: 'rare',
    tier: 'C',
    image: null,
    acquisition: [{ targetId: 'nanami-butcher-seller' }],
    description:
      `Nanami's Butcher is a precision-focused melee kit built around calculated strikes and deliberate execution timing. It emphasizes targeted engagement, controlled dash initiation, and heavy, slow-paced slashing pressure that rewards accuracy and positioning over speed.`,
    performance: {
      scaling: 'Sword',
      difficulty: 1,
      damageLevel: 1,
      aoeSize: 2,
    },
    abilities: [
      {
        name: 'Z',
        cooldown: null,
        preview: null,
      },
      {
        name: 'X',
        cooldown: null,
        preview: null,
      },
    ],
  },
  {
    id: 'gravity-cane',
    name: 'Gravity Cane',
    type: 'weapon',
    rarity: 'epic',
    tier: 'D',
    image: null,
    acquisition: [{ targetId: 'gravity-cane-seller' }],
    description:
      'Gravity Cane ability is a mid-range precision combat kit built around controlled slash sequences and focused thrust attacks. It emphasizes structured combo execution, directional pressure, and clean spacing control through multi-stage cane techniques.',
    performance: {
      scaling: 'Sword',
      difficulty: 1,
      damageLevel: 1,
      aoeSize: 2,
    },
    abilities: [
      {
        name: 'Z',
        cooldown: null,
        preview: null,
      },
      {
        name: 'X',
        cooldown: null,
        preview: null,
      },
    ],
  },
  {
    id: 'dark-blade',
    name: 'Dark Blade',
    type: 'weapon',
    rarity: 'legendary',
    tier: 'C',
    image: null,
    acquisition: [{ targetId: 'dark-blade-seller' }],
    description:
      'Dark Blade ability is a fast-paced melee kit centered around dark energy sword techniques and rapid slash execution. It emphasizes quick sequencing, consistent forward pressure, and fluid chaining of dark-infused blade attacks.',
    performance: {
      scaling: 'Sword',
      difficulty: 1,
      damageLevel: 1,
      aoeSize: 2,
    },
    abilities: [
      {
        name: 'Z',
        cooldown: null,
        preview: null,
      },
      {
        name: 'X',
        cooldown: null,
        preview: null,
      },
    ],
  },
  {
    id: 'shank-saber',
    name: `Shank's Saber`,
    type: 'weapon',
    rarity: 'mythical',
    tier: 'C',
    image: null,
    acquisition: [{ targetId: 'shank-saber-seller' }],
    description:
      `Shanks' Saber ability is a straightforward sword-based kit focused on clean, high-clarity strikes and controlled area pressure. It blends a ranged slash wave with a grounded aura technique that rewards positioning and sustained proximity combat.`,
    performance: {
      scaling: 'Sword',
      difficulty: 1,
      damageLevel: 1,
      aoeSize: 2,
    },
    abilities: [
      {
        name: 'Z',
        cooldown: null,
        preview: null,
      },
      {
        name: 'X',
        cooldown: null,
        preview: null,
      },
    ],
  },
  {
    id: 'excalibur',
    name: 'Excalibur',
    type: 'weapon',
    rarity: 'mythical',
    tier: 'C',
    image: null,
    acquisition: [{ targetId: 'excalibur-seller' }],
    description:
      'Excalibur ability is a holy-energy sword kit centered around long-range light slashes, sustained energy zones, and weapon enhancement. It focuses on battlefield control through lingering light attacks and structured burst sequences, supported by a temporary weapon buff state.',
    performance: {
      scaling: 'Sword',
      difficulty: 1,
      damageLevel: 2,
      aoeSize: 4,
    },
    abilities: [
      {
        name: 'Z',
        cooldown: null,
        preview: null,
      },
      {
        name: 'X',
        cooldown: null,
        preview: null,
      },
      {
        name: 'C',
        cooldown: null,
        preview: null,
      },
    ],
  },
  {
    id: 'shadow',
    name: 'Shadow',
    type: 'weapon',
    rarity: 'mythical',
    tier: 'SSS',
    image: null,
    acquisition: [{ targetId: 'shadow-seller' }],
    description:
      'Shadow ability is a high-impact combat kit built around dark energy techniques, explosive area strikes, and cinematic finishing attacks. It emphasizes battlefield pressure through large-scale AoE attacks and signature ultimate-style abilities with strong visual and timing-based execution.',
    performance: {
      scaling: 'Sword',
      difficulty: 2,
      damageLevel: 5,
      aoeSize: 3,
    },
    abilities: [
      {
        name: 'Z',
        cooldown: null,
        preview: null,
      },
      {
        name: 'X',
        cooldown: null,
        preview: null,
      },
      {
        name: 'C',
        cooldown: null,
        preview: null,
      },
      {
        name: 'V',
        cooldown: null,
        preview: null,
      },
      {
        name: 'F',
        cooldown: null,
        preview: null,
      },
    ],
  },
  {
    id: 'crazy-slots',
    name: 'Crazy Slots',
    type: 'weapon',
    rarity: 'mythical',
    availability: 'unobtainable',
    tier: '?',
    image: null,
    acquisition: [{ targetId: 'crazy-slots-seller' }],
    description:
      'Unknown.',
    performance: {
      scaling: 'Sword',
      difficulty: 1,
      damageLevel: 1,
      aoeSize: 1,
    },
    abilities: [
      {
        name: 'Z',
        cooldown: null,
        preview: null,
      },
      {
        name: 'X',
        cooldown: null,
        preview: null,
      },
      {
        name: 'C',
        cooldown: null,
        preview: null,
      },
      {
        name: 'V',
        cooldown: null,
        preview: null,
      },
    ],
  },
];