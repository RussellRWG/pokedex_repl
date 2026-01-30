// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { initState } from "./state.js";

function main() {
  let state = initState();
  startREPL(state);
}

main();
