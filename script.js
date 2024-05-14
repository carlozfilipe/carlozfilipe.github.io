const htmlElement = document.documentElement;
const switchButton = document.querySelector('#switch');
const imgProfile = document.querySelector('#profile img');

switchButton.addEventListener('click', () => {
  htmlElement.classList.toggle('light');

  /* if (htmlElement.classList.contains('light')) {
    imgProfile.setAttribute('src', './assets/avatar-light.png');
  } else {
    imgProfile.setAttribute('src', './assets/avatar.png');
  } */
});