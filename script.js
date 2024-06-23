let number1 = 0;
let number2 = 0;
let operator = "";

let displayValue = "";
const display = document.querySelector(".display");
const numbers = Array.from(document.querySelectorAll(".number"));

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        addToDisplay(num.innerText);
    })
})

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
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function addToDisplay(string) {
    displayValue += string;
    display.textContent = displayValue;
}