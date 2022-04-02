// World vocabulary. Shared by server + client.

// Terrain types.
export const TERRAIN_TYPES = [
  'lake',
  'swamp',
  'forest',
  'barren',
  'uplands',
  'pasture',
  'plains',
] as const;
export type TerrainType = (typeof TERRAIN_TYPES)[number];

// Tile occupancy.
export const TILE_STATUS = ['neutral', 'player_city', 'npc_city'] as const;
export type TileStatus = (typeof TILE_STATUS)[number];

// Feudal ladder, low to high. Conquest climbs it.
export const CITY_TYPES = ['normal', 'county', 'shire', 'prefecture'] as const;
export type CityType = (typeof CITY_TYPES)[number];
