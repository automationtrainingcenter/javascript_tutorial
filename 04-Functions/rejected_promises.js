"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// get Country
let getCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${
        data.languages[Object.keys(data.languages)[0]]
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[Object.keys(data.currencies)[0]].name
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  
};

let displayError = function(errorMsg) {
  countriesContainer.insertAdjacentText("beforeend", errorMsg);
};

let getResJSON = function(url, errorMsg='Something went wrong.') {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg}. ${response.status}`);
    };
    return response.json();
  });
};

let getCountryAndNeighbourData = function (countryName) {
  // Get main country using fetch api
  getResJSON(`https://restcountries.com/v3.1/name/${countryName}`, `Country ${countryName} not found.`)
  .then((data) => {
    getCountry(data[0])
    let neighbourCouCode = data[0].borders?.[0];
    // Get neighbour country using fetch api`
    return getResJSON(`https://restcountries.com/v3.1/alpha/${neighbourCouCode}`, `Country with code ${neighbourCouCode} not found.`);
  })
  .then((data) => getCountry(data[0], 'neighbour'))
  .catch(error => {
    // rejected promieses will be handled using catch block
    console.log(error);
    displayError(`Something went wrong, ${error.message}. Try again later.`);
  })
  .finally(() => {
    countriesContainer.style.opacity = 1;
  });
  
};

btn.addEventListener('click', function() {
  getCountryAndNeighbourData("usa");
});``