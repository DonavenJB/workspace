// Base resources.
export const RESOURCE_KEYS = ['gold', 'food', 'wood', 'stone', 'iron'] as const;
export type ResourceKey = (typeof RESOURCE_KEYS)[number];

// Resource bag: stockpiles, costs, loot.
export type Resources = Record<ResourceKey, number>;

// Zeroed bag.
export function emptyResources(): Resources {
  return { gold: 0, food: 0, wood: 0, stone: 0, iron: 0 };
}
