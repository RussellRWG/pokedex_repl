import { getCommands } from "./command_registry.js";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
export function initState() {
    let commands = getCommands();
    let rl = readline.createInterface({
        input: input,
        output: output,
        prompt: "Pokedex > ",
    });
    let state = { commands, rl };
    return state;
}
