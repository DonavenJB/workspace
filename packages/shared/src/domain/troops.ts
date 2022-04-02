// Troop roster. Spellings kept to match existing data.
export const TROOP_KEYS = [
  'labors',
  'rookies',
  'scouts',
  'pikeman',
  'swordman',
  'archers',
  'cavalries',
  'cuirassiers',
  'rickshaw',
  'ballista',
  'batteringRam',
  'trebuchet',
] as const;
export type TroopKey = (typeof TROOP_KEYS)[number];

// Troop bag: garrison, army, casualties.
export type Troops = Record<TroopKey, number>;

// Zeroed bag.
export function emptyTroops(): Troops {
  return {
    labors: 0,
    rookies: 0,
    scouts: 0,
    pikeman: 0,
    swordman: 0,
    archers: 0,
    cavalries: 0,
    cuirassiers: 0,
    rickshaw: 0,
    ballista: 0,
    batteringRam: 0,
    trebuchet: 0,
  };
}
