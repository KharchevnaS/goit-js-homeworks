import menuGalleryList from './menu.js';
import renderMenuItem from './templates/post-feed-item.hbs';
const menuList = menuGalleryList.reduce(
  (accumulator, currentValue) => accumulator + renderMenuItem(currentValue),
  '',
);
const menuGallery = document.querySelector('.js-menu');
menuGallery.innerHTML = menuList;
console.log(menuGallery);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body;
const inputSwitch = document.querySelector('.js-switch-input');
document.getElementById('theme-switch-control').checked = true;
inputSwitch.addEventListener('change', handleChangeTheme);

function handleChangeTheme(e) {
  body.classList.add('dark-theme');
}

localStorage.setItem('Theme', JSON.stringify(Theme));