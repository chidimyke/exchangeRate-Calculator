// import fetch from "node-fetch";
function calculate() {
  fetch("items.json")
    // .then((feedback) => console.log(feedback))
    .then((feedback) => feedback.json())
    .then((data) => (document.body.innerHTML = data[0].text));
}

calculate();
