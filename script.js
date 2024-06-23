let numbers = [];
let operators = [];
let displayValue = "";
const displayDiv = document.querySelector(".display");
const numbersBtn = Array.from(document.querySelectorAll(".number"));

numbersBtn.forEach((num) => {
    num.addEventListener("click", () => {
        addNumberToDisplay(num.innerText);
    });
});

function operate(operator, number1, number2) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply('*');
        case '/':
            return divide(number1, number2);
        default:
            return "Invalid operator.";
    };
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function addNumberToDisplay(string) {
    displayValue += string;
    displayDiv.textContent = displayValue;
};

function addOperator() {

};