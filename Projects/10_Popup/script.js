const button = document.querySelector('button');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.close-icon');

button.addEventListener('click', () => {
  popup.classList.add('open')
})

closeIcon.addEventListener('click', () => {
  popup.classList.remove('open')
})