const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
    if (key === '\u0003') {
        process.exit();
    }

    if (key === "1") {
        console.log('Ayyyyy')
    }
    
    console.log(key)
});