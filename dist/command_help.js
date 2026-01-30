export function commandHelp(state) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    for (let command of Object.values(state.commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
}
