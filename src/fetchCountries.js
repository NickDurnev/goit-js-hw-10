import { renderCountries } from "./renderCountries";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export function fetchCountries(name) {
    const BASE_URL = 'https://restcountries.com/v2/name/';
    const url = `${BASE_URL}${name}?fields=name,capital,population,flags,languages`
    fetch(url)
        .then(responce => responce.json())
        .then(renderCountries)
        .catch(fetchError)
}

function fetchError(error) {
    Notify.failure('Oops, there is no country with that name');
}