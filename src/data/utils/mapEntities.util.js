import { AVAILABILITIES, RARITIES, TIERS, TYPES } from '../constants';
import {
  CONSUMABLES,
  DEVIL_FRUITS,
  MATERIALS,
  SPECS,
  WEAPONS,
} from '../entities';

export const MAPPED_DEVIL_FRUITS = DEVIL_FRUITS.map((df) => ({
  ...df,
  tier: TIERS[df.tier],
  rarity: RARITIES[df.rarity],
  type: TYPES[df.type],
}));

export const MAPPED_SPECS = SPECS.map((s) => ({
  ...s,
  tier: TIERS[s.tier],
  availability: AVAILABILITIES[s.availability],
  rarity: RARITIES[s.rarity],
  type: TYPES[s.type],
}));

export const MAPPED_WEAPONS = WEAPONS.map((w) => ({
  ...w,
  tier: TIERS[w.tier],
  availability: AVAILABILITIES[w.availability],
  rarity: RARITIES[w.rarity],
  type: TYPES[w.type],
}));

export const MAPPED_MATERIALS = MATERIALS.map((m) => ({
  ...m,
  availability: AVAILABILITIES[m.availability],
  rarity: RARITIES[m.rarity],
  type: TYPES[m.type],
}));

export const MAPPED_CONSUMABLES = CONSUMABLES.map((c) => ({
  ...c,
  availability: AVAILABILITIES[c.availability],
  rarity: RARITIES[c.rarity],
  type: TYPES[c.type],
}));
