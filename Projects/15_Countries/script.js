const countriesContainer = document.querySelector('.countries-container')
const filterByRegion = document.querySelector('.filter-by-region')

fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data)
  })

filterByRegion.addEventListener('change', (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then((data) => {
      renderCountries(data)
    })
})

function renderCountries(data) {
  countriesContainer.innerHTML = ''
  data.forEach((country) => {
    // console.log(country.name.common)

    const countryCard = document.createElement('a')
    countryCard.classList.add('country-card')
    // countryCard.href = `/country.html?name=${country.name.common}`
    countryCard.href = `/Projects/15_Countries/country.html?name=${country.name.common}`
    countryCard.innerHTML = `
    <img src="${country.flags.svg}" alt="${country.name.common} flag">
    <div class="card-text">
      <h3 class="card-title">${country.name.common}</h3>
      <p><b>Population: </b>${country.population.toLocaleString()}</p>
      <p><b>Region: </b>${country.region}</p>
      <p><b>Capital: </b>${country.capital?.[0]}</p>
    </div>
`
    countriesContainer.appendChild(countryCard)
  })
}
