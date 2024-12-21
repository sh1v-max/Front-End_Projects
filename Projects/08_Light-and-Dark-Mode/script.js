const fullDarkModeCheckbox = document.querySelector('#full-dark-mode');
const containedDarkModeCheckbox = document.querySelector('#contained-dark-mode');
const container = document.querySelector('.container')

const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'));
const isContainedDarkMode = JSON.parse(localStorage.getItem('containedDarkModeCheckbox'));

if(isFullDarkMode){
  fullDarkModeCheckbox.checked = true;
}
if(isContainedDarkMode){
  containedDarkModeCheckbox.checked = true;
}


fullDarkModeCheckbox.addEventListener('change', (e) => {
  // console.log('hello')
  changeFullDarkMode ()
  changeContainedDarkMode ()
})

containedDarkModeCheckbox.addEventListener('change', (e) => {
  //? or we can simple inherit from the function
  changeContainedDarkMode ()
})

function changeFullDarkMode (){
  // if (fullDarkModeCheckbox.checked) { //true/false)
  //   document.body.classList.add('dark');
  //   localStorage.setItem('fullDarkModeCheckbox',  true) 
  // }else {
  //   document.body.classList.remove('dark');
  //   localStorage.setItem('fullDarkModeCheckbox',  false)
  // }
  // containedDarkModeCheckbox.checked = fullDarkModeCheckbox.checked;
  //? using reusable function
  changeTheme(fullDarkModeCheckbox, document.body, 'fullDarkModeCheckbox')
}

function changeContainedDarkMode (){
  // if (containedDarkModeCheckbox.checked) { //true/false)
  //   container.classList.add('dark');
  //   localStorage.setItem('containedDarkModeCheckbox',  true)
  // }else {
  //   container.classList.remove('dark');
  //   localStorage.setItem('containedDarkModeCheckbox',  false)
  // }
  //? using reusable function
  changeTheme(containedDarkModeCheckbox, container, 'containedDarkModeCheckbox')
}

//? making a reusable function
function changeTheme (checkbox, element, LocalStorageKey){
  if(checkbox.checked){
    element.classList.add('dark');
    localStorage.setItem(LocalStorageKey,  true)
  }else {
    element.classList.remove('dark');
    localStorage.setItem(LocalStorageKey,  false)
  }
}

changeFullDarkMode ()
changeContainedDarkMode ()