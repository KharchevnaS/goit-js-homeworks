'use strict';
const message = 'Proin sociis natoque et magnis parturient montes mus';
const messageWords = message.split(' ');
const messageWordsLength = messageWords.length;

const calculateEngravingPrice = function (message, pricePerWord) {
    const multPrice = pricePerWord * messageWordsLength;
    return multPrice;

}

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10);

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));