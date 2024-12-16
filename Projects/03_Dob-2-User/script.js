const form = document.querySelector('form')
const user1Input = document.querySelector('input#user-1')
const user2Input = document.querySelector('input#user-2')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')

form.addEventListener('submit', (e) => {
  e.preventDefault() // prevents the page from reloading
  const user1Date = parseDateString(user1Input.value)
  const user2Date = parseDateString(user2Input.value)

  if (user1Date > user2Date) {
    p1.innerText = 'User 1 is older than User 2'
    p2.innerText = `The difference is ${formatDateDifference(user1Date, user2Date)}`
  } else if (user1Date < user2Date) {
    p1.innerText = 'User 2 is older than User 1'
    p2.innerText = `The difference is ${formatDateDifference(user2Date, user1Date)}`
  } else {
    p1.innerText = 'Both are of the same age'
    p2.innerText = ''
  }
})

function parseDateString(dobString) {
  const [dateString, timeString] = dobString.split(' ')
  const [day, month, year] = dateString.split('/').map((el) => Number(el))
  const [hour, minute] = timeString.split(':').map((el) => Number(el))
  return new Date(year, month - 1, day, hour, minute)
}

function formatDateDifference(olderDate, youngerDate) {
  let years = olderDate.getFullYear() - youngerDate.getFullYear()
  let months = olderDate.getMonth() - youngerDate.getMonth()
  let days = olderDate.getDate() - youngerDate.getDate()
  let hours = olderDate.getHours() - youngerDate.getHours()
  let minutes = olderDate.getMinutes() - youngerDate.getMinutes()

  if (minutes < 0) {
    minutes += 60
    hours--
  }
  if (hours < 0) {
    hours += 24
    days--
  }
  if (days < 0) {
    const previousMonth = new Date(olderDate.getFullYear(), olderDate.getMonth(), 0)
    days += previousMonth.getDate()
    months--
  }
  if (months < 0) {
    months += 12
    years--
  }

  return `${years} years, ${months} months, ${days} days, ${hours} hours, and ${minutes} minutes.`
}
