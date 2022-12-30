export const Units: Record<string, number> = {
  centimeters: 637100000,
  inches: 250826771.65354,
  kilometers: 6371,
  miles: 3958.7558657441,
  yards: 6967410.3237095,
} as const;
const UnitNames = Object.keys(Units);

export type UnitName = typeof UnitNames[number];

export type Unit = typeof Units[string];
