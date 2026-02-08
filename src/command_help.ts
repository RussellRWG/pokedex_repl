import { State } from "./state.js";

export function commandHelp(state: State): Promise<void> {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");
  for (let command of Object.values(state.commands)) {
    console.log(`${command.name}: ${command.description}`);
  }
  return Promise.resolve();
}
