import { Cache } from "./pokecache.js";
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private readonly cache = new Cache(200000);

  constructor() {}

  async fetchLocations(pageURL: string | null): Promise<LocationsResponse> {
    let url = PokeAPI.baseURL + "/location-area/";
    if (pageURL) {
      url = pageURL;
    }
    const cached_val = this.cache.get<LocationsResponse>(url);
    if (cached_val) {
      return cached_val;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data: LocationsResponse = await response.json();
      this.cache.add(url, data);
      return data;
    } catch (error) {
      throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<LocationArea> {
    const url = PokeAPI.baseURL + "/location-area/" + locationName;
    const cached_val = this.cache.get<LocationArea>(url);
    if (cached_val) {
      return cached_val;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data: LocationArea = await response.json();
      this.cache.add(url, data);
      return data;
    } catch (error) {
      throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    let url = PokeAPI.baseURL + `/pokemon/${pokemonName}`;
    const cached_val = this.cache.get<Pokemon>(url);
    if (cached_val) {
      return cached_val;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data: Pokemon = await response.json();
      this.cache.add(url, data);
      return data;
    } catch (error) {
      throw new Error(`Error fetching pokemon: ${(error as Error).message}`);
    }
  }
}

export type Location = {
  id: number;
  name: string;
  region: NamedAPIResource;
  names: Array<string>;
  game_indices: Array<Number>;
  encounter_method_rates: Array<any>;
  location: Location;
  Areas: Array<NamedAPIResource>;
};

export type LocationsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<NamedAPIResource>;
};

export type LocationArea = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: Array<any>;
  location: NamedAPIResource;
  names: Array<string>;
  pokemon_encounters: Array<any>;
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<any>;
  forms: Array<any>;
  game_indices: Array<any>;
  held_items: Array<any>;
  moves: Array<any>;
  species: NamedAPIResource;
  sprites: any;
  cries: any;
  stats: Array<{ base_stat: number; effort: number; stat: NamedAPIResource }>;
  types: Array<{ slot: number; type: NamedAPIResource }>;
  past_types: Array<any>;
  past_abilities: Array<any>;
};

export type NamedAPIResource = {
  name: string;
  url: string;
};
