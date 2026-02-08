import { getCommands } from "./command_registry.js";
import { stdin as input, stdout as output } from "node:process";
import { PokeAPI } from "./pokeapi.js";
import * as readline from "node:readline/promises";
export function initState() {
    let commands = getCommands();
    let rl = readline.createInterface({
        input: input,
        output: output,
        prompt: "Pokedex > ",
    });
    let pokeapi = new PokeAPI();
    let state = {
        commands,
        rl,
        pokeapi,
        nextLocationsURL: "",
        prevLocationsURL: "",
    };
    return state;
}
