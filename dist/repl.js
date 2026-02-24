export function cleanInput(str) {
    let words = str.trim().toLowerCase().split(" ");
    return words;
}
async function processCommand(state, input) {
    let parts = cleanInput(input);
    if (parts[0] === "") {
        console.log('Please enter a command. Enter "help" for help.');
    }
    else {
        let command = parts[0];
        if (command in state.commands) {
            try {
                if (parts.length > 1) {
                    await state.commands[command].callback(state, parts[1]);
                }
                else {
                    await state.commands[command].callback(state);
                }
            }
            catch (error) {
                console.log("Error processing command. Please try again.");
            }
        }
        else {
            console.log('Unrecognized command. Enter "help" for help.');
        }
    }
    state.rl.prompt();
}
export async function startREPL(state) {
    state.rl.prompt();
    state.rl.on("line", (line) => {
        void processCommand(state, line);
    });
}
