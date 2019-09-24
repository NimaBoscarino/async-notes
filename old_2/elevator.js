// Elevator 🚪

const requestElevator = function (elevatorAction) {
    console.log('Boop!')

    setTimeout(() => {
        console.log('elevator is here')
        // getOnElevator()
        // do something dynamic
        elevatorAction()
    }, 2000)

}

const getOnElevator = function () {
    console.log("Get on elevator")
}

const awkwardlyMissTheElevator = function () {
    console.log("Awkwardly miss the elevator 😬")
}

requestElevator(getOnElevator) // Get on the elevator

requestElevator(awkwardlyMissTheElevator) // Miss the elevator
