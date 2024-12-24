const billAmountInput = document.querySelector ('#bill-amount');
const numberOfPeopleInput = document.querySelector ('.number-of-people');
const customTipInput = document.querySelector('.custom-tip')
const generateBillBtn = document.querySelector('.generate-bill-button')
const tipAmountOutput = document.querySelector('.tip-amount span')
const totalBillOutput = document.querySelector('.total span')
const eachPersonBillOutput = document.querySelector('.each-person-bill span')
const tipsContainer = document.querySelector('.tip-container')

generateBillBtn.addEventListener('click', function(){
  const billAmount = parseInt(billAmountInput.value)
  const customTip = parseInt(customTipInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);

  const tipAmount = billAmount * (customTip / 100)
  const totalBill = billAmount + tipAmount
  const eachPersonBill = totalBill / numberOfPeople;

  tipAmountOutput.innerText = `₹ ${tipAmount}`
  totalBillOutput.innerText = `₹ ${totalBill}`
  eachPersonBillOutput.innerText = `₹ ${eachPersonBill}`
  console.log(eachPersonBill)
})

tipsContainer.addEventListener('click', (e) => {
  console.log(e.target)
})