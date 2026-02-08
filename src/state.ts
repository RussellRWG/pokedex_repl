import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { stdin as input, stdout as output } from "node:process";
import { PokeAPI } from "./pokeapi.js";
import * as readline from "node:readline/promises";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  commands: Record<string, CLICommand>;
  rl: Interface;
  pokeapi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
};

export function initState() {
  let commands = getCommands();
  let rl = readline.createInterface({
    input: input,
    output: output,
    prompt: "Pokedex > ",
  });
  let pokeapi = new PokeAPI();
  let state: State = {
    commands,
    rl,
    pokeapi,
    nextLocationsURL: "",
    prevLocationsURL: "",
  };
  return state;
}
