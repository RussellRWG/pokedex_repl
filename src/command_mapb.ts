import { State } from "./state.js";
import { NamedAPIResource } from "./pokeapi.js";

export async function commandMapb(state: State): Promise<void> {
  let locations: Array<NamedAPIResource> = [];
  try {
    if (!state.prevLocationsURL) {
      console.log('No previous locations. Please use "map" first.');
      return Promise.resolve();
    }
    let response = await state.pokeapi.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = response.next;
    state.prevLocationsURL = response.previous;
    locations = response.results;
    for (let location of locations) {
      console.log(location.name);
    }
  } catch (error) {
    console.log(`Encountered error {(error as Error).message}`);
  }
  return Promise.resolve();
}
