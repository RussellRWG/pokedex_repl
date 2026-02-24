import { State } from "./state.js";
import { LocationArea } from "./pokeapi.js";

export async function commandExplore(
  state: State,
  locationName: string,
): Promise<void> {
  try {
    let response = await state.pokeapi.fetchLocation(locationName);
    const location: LocationArea = response;
    const pokemonNames = location.pokemon_encounters.map((e) => e.pokemon.name);
    console.log(`Exploring ${locationName}...`);
    if (pokemonNames.length === 0) {
      console.log(`No pokemon found in ${locationName}`);
    } else {
      console.log("Found Pokemon:");
      for (let name of pokemonNames) {
        console.log(`- ${name}`);
      }
    }
  } catch (error) {
    console.log(`Encountered error ${(error as Error).message}`);
  }
  return Promise.resolve();
}
