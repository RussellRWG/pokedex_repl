export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL: string | null): Promise<LocationsResponse> {
    let url = PokeAPI.baseURL + "/location-area/";
    if (pageURL) {
      url = pageURL;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    let url = PokeAPI.baseURL + "/location/";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }
}

export type ShallowLocations = {
  // add properties here
};

export type Location = {
  id: Number;
  name: string;
  region: NamedAPIResource;
  names: Array<string>;
  game_indices: Array<Number>;
  encounter_method_rates: Array<any>;
  location: Location;
  Areas: Array<NamedAPIResource>;
};

export type LocationsResponse = {
  count: Number;
  next: string | null;
  previous: string | null;
  results: Array<NamedAPIResource>;
};

export type LocationArea = {
  id: Number;
  name: string;
  game_index: Number;
  encounter_method_rates: Array<any>;
  location: NamedAPIResource;
  names: Array<string>;
  pokemon_encounters: Array<any>;
};

export type NamedAPIResource = {
  name: string;
  url: string;
};
