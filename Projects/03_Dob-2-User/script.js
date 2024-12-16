const form = document.querySelector('form')
const input = document.querySelector('input')
const local = document.querySelector('.local span')
const utc = document.querySelector('.utc span')
const iso = document.querySelector('.iso span')

form.addEventListener('submit', (e) => {
  e.preventDefault() // prevents the page from reloading
  const timestamp = Number(input.value)
  const date = new Date(timestamp)
  local.innerText = date.toLocaleDateString('en-GB', {dateStyle: 'full'})
  utc.innerText = date.toUTCString()
  iso.innerText = date.toISOString()
})