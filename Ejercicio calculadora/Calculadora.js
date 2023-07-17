const displayPreviousImput = document.querySelector(".previousImput");
const displayActualImput = document.querySelector(".actualImput");
const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".result");
const cleanButton = document.querySelector(".clean");

class Operations {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    return this.num1 + this.num2;
  }
  rest() {
    return this.num1 - this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
  square() {
    return Math.sqrt(this.num1);
  }
}

const cleanDisplays = () => {
  displayPreviousImput.textContent = "0";
  displayActualImput.textContent = "0";
};
let num1 = 0;
let num2 = 0;
let operator = "";

const getNumber = (number) => {
  if (number === ".") {
    if (!displayActualImput.textContent.includes(".")) {
      displayActualImput.textContent += number;
    } else {
      return;
    }
  } else {
    if (displayActualImput.textContent === "0") {
      displayActualImput.textContent = number;
    } else {
      displayActualImput.textContent += number;
    }
  }
};
const useOperators = (operator) => {
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "×" ||
    operator === "÷"
  ) {
    displayPreviousImput.textContent =
      displayActualImput.textContent + operator;
    num1 = parseFloat(displayPreviousImput.textContent.slice(0, -1));
    displayActualImput.textContent = "";
    return;
  }
  if (operator === "√") {
    num1 = parseFloat(displayActualImput.textContent);
    displayPreviousImput.textContent = `√${num1} = `;
    const result = new Operations(num1).square();
    displayActualImput.textContent = result;
    return;
  }
  if (operator === "=") {
    num2 = parseFloat(displayActualImput.textContent);

    let result;

    if (displayPreviousImput.textContent.includes("+")) {
      result = new Operations(num1, num2).sum();
      displayActualImput.textContent = result;
      displayPreviousImput.textContent = `${num1} + ${num2} =`;
      return;
    } else if (displayPreviousImput.textContent.includes("-")) {
      result = new Operations(num1, num2).rest();
      displayActualImput.textContent = result;
      displayPreviousImput.textContent = `${num1} - ${num2} =`;
      return;
    } else if (displayPreviousImput.textContent.includes("×")) {
      result = new Operations(num1, num2).multiply();
      displayActualImput.textContent = result;
      displayPreviousImput.textContent = `${num1} × ${num2} =`;
      return;
    } else if (displayPreviousImput.textContent.includes("÷")) {
      if (num2 === 0) {
        displayActualImput.textContent = "CAN'T DO THAT!    Press AC";
        return;
      }
      result = new Operations(num1, num2).divide();
      displayActualImput.textContent = result;
      displayPreviousImput.textContent = `${num1} ÷ ${num2} =`;
    }
    return;
  }
  return;
};

numbersButtons.forEach((number) =>
  number.addEventListener("click", () => getNumber(number.textContent))
);
operatorsButtons.forEach((operator) =>
  operator.addEventListener("click", () => useOperators(operator.textContent))
);
cleanButton.addEventListener("click", cleanDisplays);
