const htmlElement = document.documentElement;
const switchButton = document.querySelector('#switch');
const imgProfile = document.querySelector('#profile img');

switchButton.addEventListener('click', () => {
  htmlElement.classList.toggle('light');
});