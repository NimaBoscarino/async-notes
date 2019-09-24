const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// I don't understand the code above!

console.log("Welcome to Big Ol' Jimbo's 🤖")

console.log("What can I get ya?")

// const menuItems = [
//     {
//         id: '1',
//         name: 'Gumbo',
//         time: '2000'
//     },
//     {
//         id: '2',
//         name: 'Bianco Beans Flat White',
//         time: '500'
//     },  
//     {
//         id: '3',
//         name: "Terence's Fries & Pies",
//         time: '5000'
//     },          
// ]

const menuItems = {
    1: {
        name: 'Gumbo',
        time: '2000'
    },
    2: {
        name: 'Bianco Beans Flat White',
        time: '500'
    },
    3: {
        name: "Terrence's Pies & Fries",
        time: '5000'
    },        
}

const printMenu = () => {
    for (const key in menuItems) {
        const item = menuItems[key]
        console.log(`Press ${key} for ${item.name}`)
    }
}

const action = (data) => {
    // console.log(data)
    // console.log(menuItems[data])

    if (data === '\u0003') {
        process.exit();
    }

    if (data === 'm') {
        printMenu()
    }

    // if the data is a valid order, then print the name
    // else, tell the person to try again    
    if (menuItems[data]) {
        setTimeout(() => {
            console.log(`Mmmm, a fresh ${menuItems[data].name}`)
        }, menuItems[data].time)
    } else {
        console.log('Try again')
    }
}

stdin.on('data', action);
printMenu()