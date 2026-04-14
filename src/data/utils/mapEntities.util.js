import { h3 } from 'framer-motion/client';
import * as CONSTANTS from '../constants';
import * as ENTITIES from '../entities';

/**
 * PHASE 1: Basic Enrichment
 * Converts string keys (rarity: 'epic') into full constant objects.
 */
const enrichBasic = (item) => {
  const enriched = { ...item };
  if (item.rarity) enriched.rarity = CONSTANTS.RARITIES[item.rarity];
  if (item.type) enriched.type = CONSTANTS.TYPES[item.type];
  if (item.tier) enriched.tier = CONSTANTS.TIERS[item.tier];
  if (item.availability) enriched.availability = CONSTANTS.AVAILABILITIES[item.availability];
  if (item.part) enriched.part = CONSTANTS.PARTS[item.part];
  return enriched;
};

/**
 * PHASE 2: The Master Registry
 * A flat dictionary of every item in the game for O(1) lookups.
 */
const RAW_COLLECTIONS = Object.values(ENTITIES); // Takes all arrays from entities/index.js
const ALL_ENRICHED_ITEMS = RAW_COLLECTIONS.flat().map(enrichBasic);

const REGISTRY = ALL_ENRICHED_ITEMS.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

/**
 * PHASE 3: Relationship Resolution
 * A generic function that can deeply resolve IDs into Objects.
 */
const resolveLinks = (item) => {
  // 1. Resolve 'requirements' array (e.g., in Ranks)
  if (item.requirements) {
    item.requirements = item.requirements.map(req => {
      const targetData = REGISTRY[req.targetId];

      // CONDITION: If the targetId is found, merge the data. 
      // If NOT found, just return the current requirement object (req)
      return targetData 
        ? { ...req, ...targetData } 
        : req;
    });
  }

  // 2. Resolve other future links (e.g., 'requires' or 'provides' properties)
  if (item.targetId) {
    const targetData = REGISTRY[item.targetId];
    if (targetData) {
       return { ...item, ...targetData };
    }
  }

  return item;
};

// --- EXPORTS ---

// Map the registry items through the resolver
const FINAL_DATA = Object.values(REGISTRY).map(resolveLinks);

// Helper to filter by type
const getByType = (typeId) => FINAL_DATA.filter(i => i.type?.id === CONSTANTS.TYPES[typeId]?.id);

export const MAPPED_DEVIL_FRUITS = getByType('devil-fruit');
export const MAPPED_SPECS        = getByType('spec');
export const MAPPED_WEAPONS      = getByType('weapon');
export const MAPPED_MATERIALS    = getByType('material');
export const MAPPED_CONSUMABLES  = getByType('consumable');
export const MAPPED_ACCESSORIES  = getByType('accessory');
export const MAPPED_HEIRLOOMS    = getByType('heirloom');
export const MAPPED_COSMETICS    = getByType('cosmetic');

// Entities with no type
export const MAPPED_RACES = FINAL_DATA.filter(i => ENTITIES.RACES.some(r => r.id === i.id));
export const MAPPED_RANKS = FINAL_DATA.filter(i => ENTITIES.RANKS.some(r => r.id === i.id));
export const MAPPED_TITLES = FINAL_DATA.filter(i => ENTITIES.TITLES.some(t => t.id === i.id));
export const MAPPED_TRAITS = FINAL_DATA.filter(i => ENTITIES.TRAITS.some(t => t.id === i.id));
export const MAPPED_VOWS = FINAL_DATA.filter(i => ENTITIES.VOWS.some(v => v.id === i.id));
export const MAPPED_HAKIS = FINAL_DATA.filter(i => ENTITIES.HAKIS.some(h => h.id === i.id));
export const MAPPED_PASSIVES = FINAL_DATA.filter(i => ENTITIES.PASSIVES.some(p => p.id === i.id));