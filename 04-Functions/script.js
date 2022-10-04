"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
let getCountryData = function(countryName) {
let request = new XMLHttpRequest();
request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
request.send();
request.addEventListener("load", function () {
  let [data] = JSON.parse(request.responseText); // destructuring array
  console.log(data);
  const html =
  `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});
};

getCountryData('germany');
getCountryData('Canada');
