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
const timeZone = document.querySelector('.time-zone')
const mapLocation = document.querySelector('.map-location')
const borderCountries = document.querySelector('.border-countries')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    // data[0] can also be written as [country], according to destructuring
    // console.log(Object.values(country.name.nativeName)[0].common)
    // console.log(country)
    flagImage.src = country.flags.svg
    countryNameH1.innerText = country.name.common
    population.innerText = country.population.toLocaleString()
    region.innerText = country.region
    topLevelDomain.innerText = country.tld.join(', ')
    timeZone.innerText = country.timezones.join(', ')
    mapLocation.href = country.maps.googleMaps

    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common
    } else {
      nativeName.innerText = country.name.common
    }

    if (country.capital) {
      capital.innerText = country.capital?.[0]
    } else {
      capital.innerText = 'N/A'
    }

    if (country.subregion) {
      subRegion.innerText = country.subregion
    } else {
      subRegion.innerText = 'N/A'
    }

    if (country.languages) {
      languages.innerText = Object.values(country.languages).join(', ')
    } else {
      languages.innerText = 'N/A'
    }

    if (country.currencies) {
      currencies.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(`, `)
    } else {
      currencies.innerText = 'N/A'
    }

    if (country.borders) {
      country.borders.forEach((border) => {
        console.log(border)
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) => {
          // console.log(borderCountry)

          const borderCountryTag = document.createElement('a')
          borderCountryTag.innerText = borderCountry.name.common
          borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
          // console.log(borderCountryTag)
          borderCountries.append(borderCountryTag)
        })
      })
    }
  })
