export interface HeroBio {
  age: number;
  description: string;
}

export type HeroRarity = "normal" | "rare" | "ultra-rare" | "legendary";

export interface Hero {
  name: string;
  bio: HeroBio;
  rarity: HeroRarity;
}
