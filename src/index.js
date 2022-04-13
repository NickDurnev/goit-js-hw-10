import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');

const inputEl = document.querySelector('#search-box');
inputEl.addEventListener('input', debounce(inputChecker, DEBOUNCE_DELAY));

function inputChecker(e) {
    const inputText = e.target.value.trim();
    if (inputText.length > 0) {
        fetchCountries(inputText);
    }
}