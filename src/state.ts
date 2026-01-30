import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  commands: Record<string, CLICommand>;
  rl: Interface;
};

export function initState() {
  let commands = getCommands();
  let rl = readline.createInterface({
    input: input,
    output: output,
    prompt: "Pokedex > ",
  });
  let state: State = { commands, rl };
  return state;
}
