// fetch('https://restcountries.com/v3.1/all')
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((country) => {
//         console.log(country)
//     })
// })

const countryCard = document.createElement('a')
countryCard.classList.add('countryCard')

// const cardImg = document.createElement('img')
// cardImg.src = 'https://flagcdn.com/in.svg'
// countryCard.append(cardImg)

const cardHTML = `
<img src="https://flagcdn.com/in.svg" alt="flag">
<div class="card-text">
  <h3 class="card-title">India</h3>
  <p><b>Population: </b>1,411,978,324</p>
  <p><b>Region: </b>Asia</p>
  <p><b>Capital: </b>New Delhi</p>
</div>
`

console.log(countryCard)
