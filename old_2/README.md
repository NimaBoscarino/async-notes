# W2D2: Async Control Flow

The code we wrote in lecture can be found at the link below!

REPO: https://github.com/NimaBoscarino/async-notes

The notes we wrote are in `notes.md`.

Hey everyone! Thanks for sitting in on today's lecture. It was awesome meeting you all!

We started off by doing a little bit of review.

Review:

## What is JavaScript?

- programming language
  - give someone instructions
  - 🤖 - beep boop!
- language for communicating with:
  - the browser
  - other software
  - APIs
  - computers
  - other people
    - do keep this in mind!

## What are objects in javascript?

- proper nouns
- a container with certain properties
  - can also hold other containers
- key-value pair
  - one thing symbolizes another
  
```js
let meal = {
  drink: 'Milkshake with Vanilla + Whipped Cream',
  mainCourse: 'Quarter Pounder with Cheese',
  dessert: 'Chocolate Mousse',
  afterMealDrink: 'Pimms'
}

meal.drink
meal['drink']

meal.price = 'Free ninety-nine'
meal['price'] = 'Free ninety-nine'
```

```js
let mood = {
  morning: 'Great!',
  afternoon: 'Yup',
  evening: 'mood'
}
```

## What are functions?

A set of a specialized instructions that can be given inputs and can return outputs.

```js
const coolCode = function (name) {
  console.log('Yeah!')
  console.log('Cool!')
  console.log('Mike WILL MADE IT')
  console.log('Honorable C NOTE')
  console.log('I care about you, ', name)
}

coolCode('Nima')
coolCode('Bradlina')
coolCode('Kristoferette')

const add3 = function (number) {
  number + 3
}

console.log(add3(10))
```

## What are Callbacks?

- Function inception
  - BWAAAAAAH 🎺
- A function that's passed INTO another function
- For reusability of code, so we can implement code in different scenarios to still be useful (reduce redundancy)

Specifically, a callback is an action that another function can take.
Sometimes we use callbacks because some actions don't happen SYNCLY

What do we sometimes have to wait for?

- data from a server
- data from the filesystem
- setTimeout
- any kind of networking stuff

## DEMOS

### The message below is about the examples found in the `/old` folder. There is also a folder called `/old_2` with another demo.

One of the demos we worked on was a restaurant simulator. Take a look at the `food.js` script to see our restaurant script in action. We had to write it using callbacks because each of the food items take some _time_ to complete. By passing a callback to our `makeFries` (etc.) functions, we can give the functions something to do _after_ the food has been cooked.

We also have another example called `wait.js` that has the neutral-happy-neutral face example. 

There's a surprise script in here called `sleepy.js`. What does this file do? Who knows! Run it and see :)

`restaurant.js` has an example with an interactive restaurant. Press `1` or `2` to order food. You can make new orders while there's an order still running!

There are a couple other files in here, take a look at what's going on with them! If you have any questions, please reach out!

My name is `@nima` on Slack.