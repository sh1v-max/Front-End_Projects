const input = document.querySelector('input')

const lowerCaseOutput = document.querySelector('#lowercase span')
const upperCaseOutput = document.querySelector('#uppercase span')
const camelCaseOutput = document.querySelector('#camelcase span')
const pascalCaseOutput = document.querySelector('#pascalcase span')
const snakeCaseOutput = document.querySelector('#snakecase span')
const kebabCaseOutput = document.querySelector('#kebabcase span')
const trimOutput = document.querySelector('#trim span')

function capitalizeString(str) {
  // const firstCharacter = str[0].toUpperCase()
  // return str[0]?.toUpperCase() + str.slice(1, str.length)
  return str[0] ? str[0].toUpperCase() + str.slice(1) : str;
}

function camelCase(str) {
  const lowerCaseString = str.toLowerCase()
  const wordsArray = lowerCaseString.split(' ')
  const finalArray = wordsArray.map((word, i) => {
    // as map returns a new array, we are storing it into finalArray
    if (i === 0) return word
    return capitalizeString(word)
  })
  return finalArray.join('')
}

function pascalCase(str) {
  const lowerCaseString = str.toLowerCase()
  const wordsArray = lowerCaseString.split(' ')
  const finalArray = wordsArray.map((word) => {
    return capitalizeString(word)
  })
  return finalArray.join('')
}

function snakeCase(str) {
  // const wordsArray = str.split(' ')
  // return wordsArray.join('_')
  return str.replaceAll(' ', '_')
}

function kebabCase(str) {
  // const wordsArray = str.split(' ')
  // return wordsArray.join('-')
  return str.replaceAll(' ', '-')
}

function trim(str) {
  // const wordsArray = str.split(' ')
  // return wordsArray.join('-')
  return str.replaceAll(' ', '')
}

function updateScreen() {
  lowerCaseOutput.innerText = input.value.toLowerCase()
  upperCaseOutput.innerText = input.value.toUpperCase()
  camelCaseOutput.innerText = camelCase(input.value)
  pascalCaseOutput.innerText = pascalCase(input.value)
  snakeCaseOutput.innerText = snakeCase(input.value)
  kebabCaseOutput.innerText = kebabCase(input.value)
  trimOutput.innerText = trim(input.value)
}

updateScreen()

// input.addEventListener('input', (e) => {
//   updateScreen()
// })

input.addEventListener('input', () => {
  updateScreen()
})

