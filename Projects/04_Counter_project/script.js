const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')

minusBtn.addEventListener('click', (e) => {
  // console.log('minus clicked')
  const countValue = parseInt(count.innerText)
  count.innerText = countValue - 1
})

plusBtn.addEventListener('click', (e) => {
  // console.log('plus clicked')
  const countValue = parseInt(count.innerText) 
  //using parseInt to convert string to number
  count.innerText = countValue + 1
})