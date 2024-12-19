const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')

let randomNumber = Math.round(Math.random() * 100)

form.addEventListener('submit', (e) => {
  e.preventDefault() // to stop page from reloading
  const userInputValue = parseInt(userInput.value)
  // console.log(userInputValue)
  // console.log(typeof(userInputValue))// string
  console.log(randomNumber)
  if(userInputValue < randomNumber){
    console.log('Too low')
  }else if (userInputValue > randomNumber){
    console.log('Too high')
  }else {
    console.log('Congrats... you got it right')
  }
  console.log('submitted')
  
  form.reset()
})