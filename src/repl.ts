import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { type State } from "./state.js";

export function cleanInput(str: string): Array<string> {
  let words = str.trim().toLowerCase().split(" ");
  return words;
}

export function startREPL(state: State) {
  state.rl.prompt();
  state.rl.on("line", (input) => {
    let parts = cleanInput(input);
    if (parts[0] === "") {
      console.log('Please enter a command. Enter "help" for help.');
    } else {
      let command = parts[0];
      if (command in state.commands) {
        state.commands[command].callback(state);
      } else {
        console.log('Unrecognized command. Enter "help" for help.');
      }
    }
    state.rl.prompt();
  });
}
