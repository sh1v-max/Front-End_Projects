const span = document.querySelector('h1 span')
const span2 = document.querySelector('h2 span')
const wordsList = [
  'Developer.',
  'Designer.',
  'Freelancer.',
  'Photographer.',
  'Traveler.',
]
const wordsList2 = [
  'Play-Games.',
  'Cook.',
  'Read-Books.',
  'Photograph.',
  'Travel.',
]

function autoType(wordsList, element) {
  let wordIndex = 0
  let characterIndex = 0
  let skipUpdate = 0
  let reverseType = false

  const intervalId = setInterval(() => {
    if (skipUpdate) {
      skipUpdate--
      return
    }

    if (!reverseType) {
      skipUpdate = 2
      element.innerText = element.innerText + wordsList[wordIndex][characterIndex]
      characterIndex++
    } else {
      element.innerText = element.innerText.slice(0, element.innerText.length - 1)
      characterIndex--
    }

    if (characterIndex === wordsList[wordIndex].length) {
      skipUpdate = 15
      reverseType = true
    }

    if (element.innerText.length === 0 && reverseType) {
      reverseType = false
      characterIndex = 0
      wordIndex++
    }

    if (wordIndex === wordsList.length) {
      wordIndex = 0
    }
  }, 50)
}

autoType(wordsList, span)
autoType(wordsList2, span2)
