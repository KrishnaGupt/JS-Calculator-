heading = document.querySelector("p");
navbar = document.querySelector(".navbar");
buttons = document.querySelectorAll("button");
const checkbox = document.getElementById("mode");
calculator = document.querySelector(".calculator");
functions = document.querySelectorAll(".functions");
const screen = document.getElementById("mainScreen");
calculatedVal = document.getElementById("calculatedVal");
finalVal = document.getElementsByClassName("finalValue");
calculatingVal = document.getElementById("calculatingVal");
const buttonsClass = document.querySelectorAll(".buttons");
let calculatedValue = "";

for (items of buttons) {
  items.addEventListener("click", (e) => {
    buttonVal = e.target.innerHTML;
    if (buttonVal === "C") {
      calculatingVal.innerHTML = "";
      calculatedVal.innerHTML = "";
    } else if (buttonVal === "CE") {
      let screenVal = calculatingVal.innerHTML;
      screenVal = screenVal.substring(0, screenVal.length - 1);
      calculatingVal.innerHTML = screenVal;
      calculatedVal.innerHTML = "= " + eval(screenVal);
      if (calculatingVal.innerText == "") {
        const word = true;
        if (word) {
          calculatedVal.innerText = "";
        }
      }
      console.clear();
    } else if (buttonVal === "=") {
      let screenVal = calculatingVal.innerHTML;
      calculatingVal.innerHTML = eval(screenVal);
      calculatedVal.innerHTML = "";
    } else {
      calculatingVal.innerHTML += buttonVal;
      let screenVal = calculatingVal.innerHTML;
      calculatedVal.innerHTML = "= " + eval(screenVal);
      console.clear();
    }

    if (
      calculatingVal.innerHTML.length > 12 &&
      calculatingVal.innerHTML.length < 20
    ) {
      calculatingVal.style.fontSize = "20px";
    } else if (calculatingVal.innerHTML.length > 20) {
      calculatingVal.style.fontSize = "15px";
      calculatedVal.style.fontSize = "18px";
    }
  });
}

checkbox.addEventListener("change", () => {
  calculator.classList.toggle("calculatorDarkMode");
  navbar.classList.toggle("calculatorDarkMode");
  heading.classList.toggle("whiteColor");
  screen.classList.toggle("mainBlackScreen");
  calculatedVal.classList.toggle("whiteColor");
  for (const button of buttonsClass) {
    button.classList.toggle("whiteColor");
    button.classList.toggle("buttonBackground");
  }
  for (const functionKeys of functions) {
    functionKeys.classList.toggle("functionKeys");
  }
});
