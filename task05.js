"use strict";

let message;
const china = "КИТАЙ";
const chili = "ЧИЛИ";
const australia = "АВСТРАЛИЯ";
const india = "ИНДИЯ";
const jamayka = "ЯМАЙКА";
const chinaPrice = 100;
const chiliPrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaykaPrice = 120;
let promptChoice = `Введите страну доставки: ${china}, ${chili}, ${australia}, ${india}, ${jamayka}.`;
let country = prompt(promptChoice);
let upperCaseCountry = country.toUpperCase();

switch (upperCaseCountry) {
    case china:
        message = `Доставка в ${china} будет стоить ${chinaPrice} кредитов`;
        break;
    case chili:
        message = `Доставка в ${chili} будет стоить ${chiliPrice} кредитов`;
        break;
    case australia:
        message = `Доставка в ${australia} будет стоить ${australiaPrice} кредитов`;
        break;
    case india:
        message = `Доставка в ${india} будет стоить ${indiaPrice} кредитов`;
        break;
    case jamayka:
        message = `Доставка в ${jamayka} будет стоить ${jamaykaPrice} кредитов`;
        break;
    default:
        message = 'В вашей стране доставка не доступна';
}
alert(message);