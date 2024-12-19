const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuesses = document.querySelector('.all-guesses')
const submitBtn = document.querySelector('.submit-btn')
const startGameBtn = document.querySelector('.start-game')

const allGuessesArray = []
let randomNumber = Math.round(Math.random() * 100)

form.addEventListener('submit', (e) => {
  e.preventDefault() // to stop page from reloading
  const userInputValue = parseInt(userInput.value)
  // console.log(userInputValue)
  // console.log(typeof(userInputValue))// string
  // console.log(randomNumber)
  if(userInputValue < randomNumber){
    result.innerText = 'Too low!'
  }else if (userInputValue > randomNumber){
    result.innerText = 'Too high!'
  }else {
    result.innerText = 'Congrats... you got it right!!!'
    startGameBtn.disabled = false 
    submitBtn.disabled = true
  }
  // console.log('submitted')
  allGuessesArray.push(userInputValue)
  allGuesses.innerText = 'Your Guesses' + allGuessesArray.join(', ')
  form.reset()
})