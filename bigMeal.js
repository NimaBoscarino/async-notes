const orderAndPrepare = function (food, quantity) {
    for (let i = 0; i < quantity; i++) {
        console.log("🍜")
    }

    console.log('ding!')

    return "🚚🍜"
}

const sitDown = function () {
    console.log("Sit down 🛋")
}


console.log('Welcome to Chile, what can I get you?')
const chili = orderAndPrepare("Chili", 9999)


// Not get to this until the previous line is finished
console.log("Cool! Will be ready soon.")

sitDown()

console.log("Here's your Chili: ", chili)