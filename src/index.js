import './css/styles.css';
import fetchCountries from './fetchCountries';
import _ from "lodash";
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");
searchBox.addEventListener("input", _.debounce(fetchHandler, DEBOUNCE_DELAY));

function fetchHandler(e) {
    if (e.target.value.trim() === "") {
        countryList.innerHTML = "";
        countryInfo.innerHTML = "";
        return;
    }
    const countryArray = fetchCountries(e.target.value.trim()).then(array => {
        if (!array.ok) {            
            Promise.reject("Error: ", array.status).catch(error => {
                Notiflix.Notify.failure("Oops, there is no country with that name");
            });
              }
        if (array.length > 10) {
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
            countryList.innerHTML = "";
            countryInfo.innerHTML = "";
            return;
        }
        if (array.length >= 2 && array.length <= 10) {
            countryList.innerHTML = "";
            countryInfo.innerHTML = "";
            const arrayToRender = array.map(({ name, flags }) => {                
                return `<li class="list-elem">
                <img src=${flags.svg} alt="country flag">
                <p>${name.official}</p>
                </li>`;
            }).join("");
            countryList.insertAdjacentHTML("beforeend", arrayToRender);
        }
        if (array.length === 1) {
            countryList.innerHTML = "";
            countryInfo.innerHTML = "";
            const countryCardRender = array.map(({ name, flags, capital, population, languages }) => `<div class="card-header">
                        <img class="solo-flag" src=${flags.svg} alt="country flag">
                        <h1>${name.common}</h1>
                        </div>
                        <p><span>Capital:</span> ${capital}</p>
                        <p><span>Population:</span> ${population}</p>
                        <p><span>Languages:</span> ${Object.values(languages).join(", ")}</p>`).join("");
            countryInfo.insertAdjacentHTML("beforeend", countryCardRender);
        }
        return array;
    }).catch(error => {
        console.log(error);
    });
    console.log(countryArray);
    return countryArray;
}




