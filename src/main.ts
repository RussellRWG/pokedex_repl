// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

function main() {
  startREPL();
}

main();
