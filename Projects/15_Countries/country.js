const countryName = new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.country-details img')
const countryNameH1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top-level-domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json())
.then(([country]) => {
  // data[0] can also be written as [country], according to destructuring
  // console.log(Object.values(country.name.nativeName)[0].common)
    flagImage.src = country.flags.svg
    countryNameH1.innerText = country.name.common
    population.innerText = country.population.toLocaleString('en-IN')
    region.innerText = country.region
    topLevelDomain.innerText = country.tld.join(', ')

  if(country.name.nativeName){
    nativeName.innerText = Object.values(country.name.nativeName)[0].common
  }else{
    nativeName.innerText = country.name.common
  }

  if (country.capital) {
    capital.innerText = country.capital?.[0]
  }

  if (country.subregion) {
    subRegion.innerText = country.subregion
  }

  if (country.languages) {
    languages.innerText = Object.values(country.languages).join(', ')
  }
})