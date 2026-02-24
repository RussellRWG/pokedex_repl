import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandCatch } from "./command_catch.js";
import { commandExplore } from "./command_explore.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Retrieves and prints a list of locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Retrieves and prints the previous list of locations",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Retrieves and prints a list of pokemon in a location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Attempts to catch the specified pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Displays information about the specified pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Lists all pokemon in your Pokedex",
            callback: commandPokedex,
        },
    };
}
