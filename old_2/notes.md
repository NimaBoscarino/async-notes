# Tuesday, Week 2 Day 2

Act one: Things are good...

Act 2: There's a new kid in town

Act 3: Work with the new kid, helps us save the town from the monsters

------

What is JavaScript??

- a programming language

Booleans
Strings
Numbers

Objects
========

- Good for collecting stuff

```js
const numberToRemember = 722
const nameToRemember = "Joestephanina"
const foodToRemember = "Broccoli"
```

Create an object

```js
const thingsToRememberEmpty = {} // an empty object

const thingsToRemember = {
    number: 722,
    name: 'Joestephanina',
    food: 'Broccoli'
}
```

Getting a value from an object

```js
// thingsToRemember.number
thingsToRemember["number"]

const key = "food"
thingsToRemember[key]
```

--------

## Async Control Flow

```js
const orderAndPrepare = function (food, quantity) {
    for (let i = 0; i < quantity; i++) {
        console.log("🍜")
    }

    console.log('ding!')
}


console.log('Welcome to Chile, what can I get you?')
orderAndPrepare("Chili", 9999999)


// Not get to this until the previous line is finished
console.log("Cool! Will be ready soon.")

sitDown()
```



SYNC

ASYNC


# RESTAURANT SIM 3000

- Ordering food
- Greetings
- A menu
- Serving

A command line program that starts off with a greeting, and a menu with options.

    - Chili, 2
    - Bacon, 10
    - Spicy Chili, 3
    - Big Mac, 4

    - Kale Smoothie, 7
    - Water, 1
    - Root Beer, 2

- After selecting one option, that menu item will be created
- You can immediately order again