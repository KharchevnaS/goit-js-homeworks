import countriesPromise from './fetchCountries.js';
import countriesListItems from './country-full-info.hbs';
import countryShortInfo from './country-short-info.hbs';
import {
  debounce
} from 'lodash';
import PNotify from "pnotify/dist/es/PNotify.js";

const refs = {
  countrySearch: document.querySelector('#country-search'),
  countriesList: document.querySelector('#countries-list'),
};

const searchCountryHandlerDebounced = debounce(searchCountryHandler, 500);
refs.countrySearch.addEventListener('input', searchCountryHandlerDebounced);

function searchCountryHandler(e) {
  refs.countriesList.innerHTML = '';
  const inputSearch = e.target.value;
  console.dir(inputSearch);
  countriesPromise.fetchCountries(inputSearch).then(data => {
    console.log(data);
    if (data.length == 1) {
      const markup = buildCountriesListMarkUp(data);
      insertCountriesList(markup);
    } else if (2 <= data.length && data.length <= 10) {
      const markupShort = buildCountriesListMarkUpShort(data);
      insertCountriesList(markupShort);
    } else if (data.length > 10) {
      notice();
    }
  });
};

function insertCountriesList(items) {
  refs.countriesList.insertAdjacentHTML('beforeend', items);
};

function buildCountriesListMarkUp(items) {
  return countriesListItems(items);
};

function buildCountriesListMarkUpShort(items) {
  return countryShortInfo(items);
}

//////// PNOTIFY ////////

const stackBottomModal = {
  dir1: "down",
  firstpos1: 125,
  push: "top",
  context: document.getElementById("#js-container")
};

function notice() {
  PNotify.alert({
    text: "Too many matches found. Please enter a more specific query!",
    width: "auto",
    type: ["notice", "info", "success", "error"][
      Math.floor(Math.random() * 3.9999)
    ],
    stack: stackBottomModal
  });
}
