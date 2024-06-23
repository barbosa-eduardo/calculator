const DIGITS = "0123456789";
const OPERATORS = "+-*/%";
const numbers = [];
let operator = "";
let displayNumber = "";
const calculatorDisplay = document.querySelector(".display");

document.querySelectorAll(".number").forEach((btn) => {
    btn.addEventListener("click", () => {
        // Adicionar digito ao display
        let btnDigit = btn.innerText;
        addDigit(btnDigit);
    });
});

document.querySelectorAll(".operator").forEach((btn) => {
    btn.addEventListener("click", () => {
        // Definir operador da equacao
        // let btnOperator = btn.innerText;
        // setOperator(btnOperator);
    });
});

function addDigit(digit) {
    if (!DIGITS.includes(digit)) {
        return;
    }
    displayNumber += digit;
    console.log(displayNumber);
    updateDisplay();
}

function updateDisplay() {
    calculatorDisplay.innerText = displayNumber;
}

function operate() {
    let result;
    switch (operator) {
        case '+':
            result = add();
            break;
        case '-':
            result = subtract();
            break;
        case '*':
            result = multiply();
            break;
        case '/':
            result = divide();
            break;
        case '%':
            result = remainder()
            break;
    };
    return result
};

function add() {
    let result = numbers[0] + numbers[1];
    return result;
};

function subtract() {
    let result = numbers[0] - numbers[1];
    return result;};

function multiply() {
    let result = numbers[0] * numbers[1];
    return result;
};

function divide() {
    let result = numbers[0] / numbers[1];
    return result;
};

function remainder() {
    let result = numbers[0] % numbers[1];
    return result;
}
