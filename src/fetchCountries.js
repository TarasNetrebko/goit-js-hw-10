import Notiflix from "notiflix";
export default function fetchCountries(country) {
       const fetchCountry = fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages`).then(response => response.json());
       return fetchCountry;
};