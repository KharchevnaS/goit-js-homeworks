'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.getElementById('ingredients')
console.log(ul)

const liList = ingredients.map(function (item) {
  const li = document.createElement('li');
  const text = document.createTextNode(item);
  console.log(li);
  li.appendChild(text);
  return li;
});
ul.append(...liList);
console.log(ul);