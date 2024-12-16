const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
  e.preventDefault() // prevents the page from reloading
  const timestamp = Number(input.value)
  const date = new Date(timestamp)
  console.log(date)
})