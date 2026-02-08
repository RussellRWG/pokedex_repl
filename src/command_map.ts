import { State } from "./state.js";
import { NamedAPIResource } from "./pokeapi.js";

export async function commandMap(state: State): Promise<void> {
  let locations: Array<NamedAPIResource> = [];
  try {
    let response = await state.pokeapi.fetchLocations(state.nextLocationsURL);
    state.nextLocationsURL = response.next;
    state.prevLocationsURL = response.previous;
    if (!state.prevLocationsURL) {
      console.log("You are on the first page of results:");
    }
    locations = response.results;
    for (let location of locations) {
      console.log(location.name);
    }
  } catch (error) {
    console.log(`Encountered error ${(error as Error).message}`);
  }
  return Promise.resolve();
}
