import { State } from "./state.js";

export function commandInspect(
  state: State,
  pokemonName: string,
): Promise<void> {
  if (!Object.hasOwn(state.pokedex, pokemonName)) {
    console.log(`You don't have ${pokemonName} in your pokedex.`);
    return Promise.resolve();
  }
  const pokemon = state.pokedex[pokemonName];
  console.log(`Name: ${pokemon.name}
Height: ${pokemon.height}
Weight: ${pokemon.weight}
Stats:`);
  for (const stat of pokemon.stats) {
    console.log(`-${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log(`Types:`);
  for (const type of pokemon.types) {
    console.log(`-${type.type.name}`);
  }

  return Promise.resolve();
}
