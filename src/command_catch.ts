import { State } from "./state.js";
import { Pokemon } from "./pokeapi.js";

export async function commandCatch(
  state: State,
  pokemonName: string,
): Promise<void> {
  try {
    let response = await state.pokeapi.fetchPokemon(pokemonName);
    const pokemon: Pokemon = response;
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    if (1000 * Math.random() < pokemon.base_experience) {
      console.log(`${pokemonName} escaped!`);
      return Promise.resolve();
    } else {
      console.log(`${pokemonName} was caught!`);
      state.pokedex[pokemonName] = pokemon;
    }
  } catch (error) {
    console.log(`Encountered error ${(error as Error).message}`);
  }
  return Promise.resolve();
}
