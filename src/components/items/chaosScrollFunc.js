import pass from '../sounds/pass.mp3'
import fail from '../sounds/fail.mp3'
const possibleOutcomes = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

const randomInt = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const chaosScroll = () => {
  if (randomInt(1, 5) <= 2.1) {
    new Audio(fail).play()
    return false
  }
  let outcome = []
  for (let i = 0; i <= 5; i++) {
    outcome.push(possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)])
  }
  new Audio(pass).play()
  return outcome
}

export default chaosScroll