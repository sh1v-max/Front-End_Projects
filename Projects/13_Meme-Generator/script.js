const generateBtn = document.querySelector('.generate-button');

generateBtn.addEventListener('click', () => {
  fetch('https://meme-api.com/gimme/wholesomememes')
  .then((res => res.json()))
  .then((data) => {
    const {author, title, url} = data;
    console.log(author, title, url);
  })
})