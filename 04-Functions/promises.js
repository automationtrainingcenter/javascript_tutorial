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
  countriesContainer.style.opacity = 1;
};

let getCountryAndNeighbourData = function (countryName) {
  // Get main country using fetch api
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((response) => response.json())
  .then((data) => {
    getCountry(data[0])
    let neighbourCouCode = data[0].borders?.[0];
    // Get neighbour country using fetch api`
    return fetch(`https://restcountries.com/v3.1/alpha/${neighbourCouCode}`);
  })
  .then((response) => response.json())
  .then((data) => getCountry(data[0], 'neighbour'));
  
};

getCountryAndNeighbourData("canada");
