import { RARITIES, TIERS, TYPES } from '../constants';
import { DEVIL_FRUITS, SPECS, WEAPONS } from '../entities';

export const MAPPED_DEVIL_FRUITS = DEVIL_FRUITS.map(df => ({
  ...df,
  tier: TIERS[df.tier],
  rarity: RARITIES[df.rarity],
  type: TYPES[df.type],
}));

export const MAPPED_SPECS = SPECS.map(s => ({
  ...s,
  tier: TIERS[s.tier],
  rarity: RARITIES[s.rarity],
  type: TYPES[s.type],
}));

export const MAPPED_WEAPONS = WEAPONS.map(w => ({
  ...w,
  tier: TIERS[w.tier],
  rarity: RARITIES[w.rarity],
  type: TYPES[w.type],
}));