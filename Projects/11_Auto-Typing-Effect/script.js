const span = document.querySelector('span');

const wordsList = ['Developer', 'Designer', 'Freelancer', 'Photographer', 'Traveler'];

const word = 'Developer'

let characterIndex = 0;
let reverseType = false

const intervalId = setInterval(() => {
  if (!reverseType){
    span.innerText = span.innerText + word[characterIndex]
    characterIndex++
  }else {
    span.innerText = span.innerText.slice(0, span.innerText.length - 1)
  }

  if (span.innerText.length === 0 && reverseType){
    reverseType = false
    characterIndex = 0
  }
  if(characterIndex === word.length){
    reverseType = true
  }
}, 200)