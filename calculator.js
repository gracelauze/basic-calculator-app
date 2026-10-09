//calculator.js
//June 12 2026

let total = 0;
let temp = 0;
let currentOperation = 0;

const answerDisplay = document.getElementById("answer-display");

//to update display
function display(value) {
  answerDisplay.innerText = value;
}

//for doing calculations and updating the display
function calculate() {
  switch (currentOperation) {
    case "+":
      total += temp;
      break;
    case "-":
      total -= temp;
      break;
    case "x":
      total *= temp;
      break;
    case "/":
      total /= temp;
      break;
    case 0:
      total = temp;
      break;
  }

  temp = 0;
  display(total);
}
//for the number buttons
const digitButtons = document.querySelectorAll(".but-number");
digitButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const digit = Number(event.currentTarget.dataset.action);
    temp = temp * 10 + digit;
    display(temp);
  });
});
//basic operations
const operationButtons = document.querySelectorAll(".but-op");
operationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const action = event.currentTarget.dataset.action;

    if (action === "clear") {
      total = 0;
      temp = 0;
      currentOperation = 0; //clear currentOperation
      display(0);
    } else if (action === "=") {
      calculate();
    } else { //for +,-,x,/
      calculate();
      currentOperation = action;
    }
  });
});
