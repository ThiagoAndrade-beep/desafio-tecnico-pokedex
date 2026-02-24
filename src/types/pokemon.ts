export interface PokemonList {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    results: PokemonList[]
}

export interface DetailsPokemon {
  name: string
  height: number
  weight: number
  types: {
    type: {
      name: string
    }
  }[]
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
}