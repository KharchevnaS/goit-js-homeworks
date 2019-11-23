import galleryList from './gallery-items.js';

// СОЗДАНИЕ РАЗМЕТКИ //

const gallery = document.querySelector('.js-gallery');
const imgLightbox = document.querySelector('.lightbox__image');

const liList = galleryList.map(obj => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');

  const aLink = document.createElement('a');
  aLink.classList.add('gallery__link');
  aLink.setAttribute('href', obj.original);

  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.setAttribute('src', obj.preview);
  img.setAttribute('data-source', obj.original);
  img.setAttribute('alt', obj.description);

  li.appendChild(aLink);
  aLink.appendChild(img);

  const span = document.createElement('span');
  span.classList.add('gallery__icon');

  const i = document.createElement('i');
  i.classList.add('"material-icons');
  i.textContent = 'zoom_out_map';

  aLink.appendChild(span);
  span.appendChild(i);

  return li;
});

gallery.append(...liList);

// МОДАЛЬНОЕ ОКНО ДЛЯ ПОЛНОРАЗМЕРНОГО ИЗОБРАЖЕНИЯ //

const lightBox = document.querySelector('.lightbox');
// lightBox.addEventListener('click', handleOpenModal);

const handleOpenModal = () => {
  lightBox.classList.add('is-open');
  window.addEventListener('keydown', handleKeyPress);
};

// РЕАЛИЗАЦИЯ ДЕЛЕГИРОВАНИЯ НА ГАЛЛЕРЕЕ ul.js-gallery
//  И ПОЛУЧЕНИЕ url БОЛЬШОГО ИЗОБРАЖЕНИЯ.

gallery.addEventListener('click', handleClickOnGallery);

function handleClickOnGallery(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  const element = e.target;
  const curEl = e.currentTarget;
  if (element === curEl) {
    return;
  }
  // ПОДМЕНА ЗНАЧЕНИЯ АТРИБУТА src ЭЛЕМЕНТА img.lightbox__image.
  const url = element.getAttribute('data-source');
  imgLightbox.src = url;
  handleOpenModal();
}

// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПО КЛИКУ НА КНОПКУ button

const closeModalWindow = document.querySelector(
  'button[data-action="close-lightbox"]',
);

closeModalWindow.addEventListener('click', handleCloseModal);

function handleCloseModal() {
  lightBox.classList.remove('is-open');
  window.removeEventListener('keydown', handleKeyPress);
  imgLightbox.src = '';
}

function handleKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  handleCloseModal();
}
