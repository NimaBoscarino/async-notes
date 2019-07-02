/*
  1. Royale with Cheese - 10 seconds
  2. Iced Tea - 2 seconds
  3. Fries - 5 seconds
*/

const makeRoyaleWCheese = (nextDish) => {
  setTimeout(() => {
    console.log('🍔')
    nextDish()
  }, 4000)
}

const makeFries = (nextDish) => {
  setTimeout(() => {
    console.log('🍟')
    nextDish()
  }, 3000)
}

const makeIcedTea = () => {
  setTimeout(() => {
    console.log('🍾')
    console.log('done!')
  }, 2000)
}

const makeCoffee = () => {
  setTimeout(() => {
    console.log('☕️')
    console.log('done!')
  }, 3000)
}

const comboOne() = () => {
  console.log('Combo one!')
  // Order 1
  makeRoyaleWCheese(() => {
    makeFries(() => {
      makeIcedTea()
    })
  })
}

const comboTwo = () => {
  console.log('Combo two!')
  // Order 2
  makeRoyaleWCheese(() => {
    makeFries(() => {
      makeCoffee()
    })
  })
}

comboOne()
comboTwo()