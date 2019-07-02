const getSmiley = (nextFace) => {
  console.log('🙂')
  setTimeout(nextFace, 2000)
}

const neutralFace = () => {
  console.log('😐')
}

const smileAndThenNeutral = () => {
  getSmiley(neutralFace)
}

const slowSmile = () => {
  neutralFace()
  setTimeout(smileAndThenNeutral, 2000)
}

slowSmile()