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
  // Get main country
  let request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();
  request.addEventListener("load", function () {
    // first call back to get given country details.
    let [data] = JSON.parse(request.responseText); // destructuring array
    console.log(data);
    // render the main country
    getCountry(data);

    // Get neighbour country
    let neighbourCouCode = data.borders?.[0];

    request = new XMLHttpRequest();
    request.open(
      "GET",
      `https://restcountries.com/v3.1/alpha/${neighbourCouCode}``
    );
    request.send();
    request.addEventListener("load", function () {
      // second call back function to get the neigbour country details.
      let [response] = JSON.parse(request.responseText);
      console.log(response);
      getCountry(response, "neighbour");
    });
  });
};

getCountryAndNeighbourData("canada");
