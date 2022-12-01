'use strict';

// PART 1: SHOW A FORTUNE
const fortureButton = document.querySelector('#get-fortune-button')
fortureButton.addEventListener('click', showFortune);

function showFortune(evt) {
  fetch('/fortune')
    .then((response) => response.text())
    .then((responseData)=> {
      document.querySelector("#fortune-text").innerHTML = responseData;      
});
}

// PART 2: SHOW WEATHER
const weatherBtn = document.querySelector('#weather-form')
weatherBtn.addEventListener('click', showWeather);

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  fetch(`${url}?zipcode=${zipcode}`)
    .then((response)=> response.json())
    .then((responseData)=>{
      document.querySelector("#weather-info").innerHTML = responseData['forecast'];
    })
}

// document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

const melonBtn = document.querySelector('#order-form-button')
melonBtn.addEventListener("click", orderMelons)

function orderMelons(evt) {
  evt.preventDefault();

  const formInputs ={
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector(`#qty-field`).value
  }

  fetch('/order-melons.json',{
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response)=> response.json())
    .then((responseData)=>{
      console.log(responseData)
      alert(responseData['code'])
    })
  }
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

// document.querySelector('#order-form').addEventListener('submit', orderMelons);
