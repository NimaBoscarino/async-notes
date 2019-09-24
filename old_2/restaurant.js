
// A command line program that starts off with a greeting, and a menu with options.

// - Chili, 2
// - Bacon, 10
// - Spicy Chili, 3
// - Big Mac, 4

// - Kale Smoothie, 7
// - Water, 1
// - Root Beer, 2

// - After selecting one option, that menu item will be created
// - You can immediately order again

const printGreeting = () => {
    console.log("Welcome to Lighthouse! What can I get you?")
}

const menu = [
    ['Chili', 2],
    ['Bacon', 10],
    ['Spicy Chili', 3],
    ['Big Mac', 4],
    ['Kale Smoothie', 7],
    ['Water', 1],
    ['Root Beer', 2]
]

const printMenu = (menuItems) => {
    for (const itemIndex in menuItems) {
        const item = menuItems[itemIndex]
        console.log("Press " + itemIndex + " " + item[0] + ": " + item[1])
    }
}

const orderAndPrepare = function (item) {
    setTimeout(() => {
        console.log("Ding! Prepared a " + item[0])
    }, item[1] * 1000)
}


// printGreeting()
// getSelection()
// createItem()

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

printGreeting()
printMenu(menu)

stdin.on('data', (key) => {
    if (key === '\u0003') {
        process.exit();
    }

    const item = menu[Number(key)]

    if (item) {
        console.log('Ordering ' + item[0])
        orderAndPrepare(item)
    } else {
        console.log("Please try again")
    }
});