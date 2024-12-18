const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const changeBy = document.querySelector('.changeBy')
const resetBtn = document.querySelector('.reset-btn')

//? note: 
// as changeBy is input field, it doesn't support innerText, or innerHtml
// we will be using .value to get the value of input field

// const changeByValue = parseInt(changeBy.value) 

minusBtn.addEventListener('click', (e) => {
  // console.log('minus clicked')
  const countValue = parseInt(count.innerText)
  const changeByValue = parseInt(changeBy.value)
  // console.log(changeByValue)
  count.innerText = countValue - changeByValue
})

plusBtn.addEventListener('click', (e) => {
  // console.log('plus clicked')
  const countValue = parseInt(count.innerText) 
  //using parseInt to convert string to number
  const changeByValue = parseInt(changeBy.value)
  // console.log(changeByValue)
  count.innerText = countValue + changeByValue
})

resetBtn.addEventListener('click', (e) => {
  count.innerText = 0
})

//? tip: 
// https://youtu.be/9OIeUtXX3SA?list=PLfEr2kn3s-bpqqk5fI9p1DJ2WhYTxfLhw&t=2111
