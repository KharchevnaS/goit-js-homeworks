// import menugGalleryList from './menu.json'; ???????????????

// СОЗДАНИЕ РАЗМЕТКИ //

const menuGallery = document.querySelector('.js-menu');

const liList = menuGallery.map(obj => {
  const li = document.createElement('li');
  li.classList.add('menu__item');

  const divCard = document.createElement('div');
  divCard.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('card__image');
  img.setAttribute('src', obj.image);
  img.setAttribute('alt', obj.name);

  li.appendChild(divCard);
  divCard.appendChild(img);

  const divCardContent = document.createElement('div');
  divCardContent.classList.add('card__content');

  const h2 = document.createElement('h2');
  h2.classList.add('card__name');
  const pCardPrice = document.createElement('p');
  pCardPrice.classList.add('card__price');

  divCard.appendChild(divCardContent);
  divCardContent.appendChild(h2);
  divCardContent.appendChild(pCardPrice);
  pCardPrice.textContent = '`${obj.price} кредитов`';

  const i = document.createElement('i');
  i.classList.add('material-icons');
  i.textContent = 'monetization_on';
  pCardPrice.appendChild(i);

  const pCardDescr = document.createElement('p');
  pCardDescr.classList.add('card__descr');
  pCardDescr.textContent = (obj.description);

  divCard.appendChild(divCardDescr);

  const ulTagList = document.createElement('ul');
  ulTagList.classList.add("tag-list");

  const liTagListItem = document.createElement('li');
  liTagListItem.classList.add('tag-list__item');
  liTagListItem.textContent = "obj.ingredients"

  divCard.appendChild(ulTagList);
  ulTagList.appendChild(liTagListItem);

  const button = document.createElement('button');
  button.classList.add('card__button, button');
  button.textContent = "В корзину";

  const iMaterialIcons = document.createElement('i');
  iMaterialIcons.classList.add('material-icons, button__icon');
  iMaterialIcons.nodeValue = shopping_cart;

  divCard.appendChild(button);
  button.appendChild(iMaterialIcons);

  return li;
});

menuGallery.append(...liList);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


// Реализуй функционал изменения темы при нажатии (событие change) на чекбокс input.js-switch-input в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения активной темы используй localStorage.
// Если при загрузке страницы тема темная, не забудь поставить свойство checked у чекбокса input.js-switch-input в true, чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление Theme.
