// // the thing that should happen
// const action = () => {
//     console.log('Ouch!')
// }

// // a function that waits for a keyPress to happens
// // run a particular action
// onKeyPress(action)

const stdin = process.stdin;

// what does this do?
stdin.setRawMode(true);
// this doesn't matter either
stdin.setEncoding('utf8');

const action = (data) => {
    // if the key is CTRL+C, then quit
    // ....

    console.log(data)

    if (data === '\u0003') {
        process.exit();
    }

    console.log('ouch!')
}

stdin.on('data', action);