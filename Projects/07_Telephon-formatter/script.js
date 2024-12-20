const input = document.querySelector('input');

let previousValue = ''
let firstThreeNumbers = ''
input.addEventListener('input', (e) => {
  const inputValue = e.target.value;
  // console.log(previousValue, inputValue)

  //!  use of Regular Expression to check if the input value is a number
  if(/\d+$/g.test(inputValue)){
    input.value = inputValue
  }else{
    input.value = inputValue.substring(0, inputValue.length-1)
  }
  
  if(inputValue.length === 4 && previousValue.length < inputValue.length){
    firstThreeNumbers = inputValue.substring(0, 3);
    input.value = `+(${firstThreeNumbers}) - ${inputValue[inputValue.length-1]}`
  } else if (inputValue.length === 9 && previousValue.length > inputValue.length){
    input.value = firstThreeNumbers
  }
  previousValue = inputValue;
})

