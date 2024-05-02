// Define an interface for the card data
export interface Card {
    name: string;
    id: number;
    maxLevel: number;
    maxEvolutionLevel: number;
    elixirCost: number;
    iconUrls: {
      medium: string;
      evolutionMedium: string;
    };
    rarity: string;
  }
  