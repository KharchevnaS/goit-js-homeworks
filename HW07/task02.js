'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
ingredients.forEach(function(item) {
  const li = document.createElement('li');
  const text = document.createTextNode(item);
  console.log(text);
  li.appendChild(text);
  console.log(li);
  document.getElementById('ingredients').appendChild(li);
});
