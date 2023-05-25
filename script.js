// import fetch from "node-fetch";
// function calculate() {
// fetch("items.json")
// .then((feedback) => console.log(feedback))
// .then((feedback) => feedback.json())
// .then((feedback_data) => (document.body.innerHTML = feedback_data[0].text));
// }
// This function will make a fetch request to the items.json file and parse the returned value for the first array item

// dom import
const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  // console.log(currency_one, currency_two);
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((feedback) => feedback.json())
    .then((feedback_data) => {
      // console.log(feedback_data);
      const rate = feedback_data.rates[currency_two];
      console.log(rate);
    });
}

// Event Listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
calculate();
