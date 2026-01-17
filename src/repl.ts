import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export function cleanInput(str: string): Array<string> {
  let words = str.trim().toLowerCase().split(" ");
  return words;
}

export function startREPL() {
  let rl = readline.createInterface({
    input: input,
    output: output,
    prompt: "Pokedex > ",
  });

  rl.prompt();
  rl.on("line", (input) => {
    let parts = cleanInput(input);
    if (parts[0] === "") {
      console.log("Please enter a command.");
      rl.prompt();
    } else {
      let command = parts[0];
      switch (command) {
        case "help":
          commandHelp();
          break;
        case "exit":
          commandExit();
          break;
      }
      rl.prompt();
    }
  });
}
