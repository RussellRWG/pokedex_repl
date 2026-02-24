import { State } from "./state.js";

export function commandPokedex(state: State): Promise<void> {
  const pokedex = state.pokedex;
  console.log("Your Pokedex:");
  for (let pokemon in pokedex) {
    console.log(`- ${pokemon}`);
  }
  return Promise.resolve();
}
