import menuGalleryList from './menu.js';
import renderMenuItem from './templates/post-feed-item.hbs';
const menuList = menuGalleryList.reduce(
  (accumulator, currentValue) => accumulator + renderMenuItem(currentValue),
  '',
);
const menuGallery = document.querySelector('.js-menu');
menuGallery.innerHTML = menuList;
console.log(menuGallery);
const refs = {
  body: document.body,
  inputSwitch: document.querySelector('.js-switch-input'),
};

const currentTheme = localStorage.getItem('theme');
refs.body.classList.add(currentTheme || 'light-theme');

function setBackgroundColor(e) {
  e.preventDefault();
  let current = '';
  if (refs.body.classList.contains('light-theme')) {
    refs.body.classList.replace('light-theme', 'dark-theme');
    current = 'dark-theme';
  } else {
    refs.body.classList.replace('dark-theme', 'light-theme');
    current = 'light-theme';
  }
  localStorage.setItem('theme', current);
}

refs.inputSwitch.addEventListener('change', setBackgroundColor);
