import { Notify } from 'notiflix/build/notiflix-notify-aio';
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

export function renderCountries(countries) {
    const markUpDemo = countries.map(country => 
            `<li>
             <p>${country.name}
             <img src =${country.flags.svg} width="20" height="20" alt=${country.name}>
             </p> 
            </li>`
    ).join('');
    const markUpInfo = countries.map(country =>
            `
            <div>
            <h1>${country.name}
             <img src =${country.flags.svg} width="70" height="50" alt=${country.name}>
            </h1>
            <p><span>Capital:</span> ${country.capital}</p>
            <p><span>Population:</span> ${country.population}</p>
            <p><span>Languages:</span> ${country.languages.map(language => language.name)}</p>
            </div>
            `
        ).join('');
    const removeChilds = (parent) => {
            while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
        }
        };
    if (countries.length > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.");
        removeChilds(countryListEl);
    }
    if (countries.length <= 10) {
        removeChilds(countryListEl);
        countryListEl.insertAdjacentHTML('beforeend', markUpDemo);
        removeChilds(countryInfoEl);
        countryInfoEl.classList.add('hidden');
    };
    if (countries.length === 1) {
        removeChilds(countryListEl);
        countryInfoEl.insertAdjacentHTML('beforeend', markUpInfo);
        countryInfoEl.classList.remove('hidden');
    };
}