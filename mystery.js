const numbers = [6700, 1400, 4200, 1000, 100000000, 3450, 8100, 8500, 7000]

let i = 0
while (i < numbers.length) {
    let current = i
    console.log('SETTING THE TIMEOUT FOR ', numbers[i])
    setTimeout(function () {
        console.log(numbers[current])
    }, numbers[current])

    i++
}

// for (let i = 0; i < numbers.length; i++) {
//     console.log('outside the settimeout', i)
//     setTimeout(function () {
//         console.log(i)
//         console.log(numbers[i])
//     }, numbers[i])
// }