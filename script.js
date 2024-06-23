const DIGITS = "0123456789";
const OPERATORS = "+-*/%";
const FUNCTIONS = ["AC", "+/-", ".", "="];
let numbers = [];
let operator = "";
let displayNumber = "";
const calculatorDisplay = document.querySelector(".display");

document.querySelectorAll(".number").forEach((btn) => {
    btn.addEventListener("click", () => {
        // Adicionar digito ao display
        let btnDigit = btn.innerText;
        input(btnDigit);
    });
});

document.querySelectorAll(".operator").forEach((btn) => {
    btn.addEventListener("click", () => {
        // Definir operador da equacao
        let btnOperator = btn.innerText;
        input(btnOperator);
    });
});

document.querySelectorAll(".function").forEach((btn) => {
    btn.addEventListener("click", () => {
        let btnFunction = btn.innerText;
        input(btnFunction);    
    });
});

function input(string) {
    if (DIGITS.includes(string)) {
        addDigit(string);
    } else if (OPERATORS.includes(string)) {
        moveToNextNumber();
        if (operator != "" && numbers.length >= 2) {
            operate();
        };
        setOperator(string);
    } else if (FUNCTIONS.includes(string)) {
        alert(string);
        switch (string) {
            case "AC":
                reset();
                break;
            case "+/-":
                invertSignal();
                break;
            case ".":
                addFloatingPoint();
                break;
            case "=":
                moveToNextNumber();
                operate();
                break;
        };
    };
};

function addDigit(inputDigit) {
    if (!DIGITS.includes(inputDigit)) {
        return;
    };
    displayNumber += inputDigit;
    updateDisplay();
};

function setOperator(inputOperator) {
    if (!OPERATORS.includes(inputOperator)) {
        return;
    };
    operator = inputOperator;
};

function updateDisplay() {
    calculatorDisplay.innerText = displayNumber;
};

function moveToNextNumber() {
    if (displayNumber != "") {
        numbers.push(Number.parseInt(displayNumber));
        displayNumber = "";
    };
};

function reset() {
    displayNumber = "";
    operator = "";
    numbers = [];
    updateDisplay();
};

function invertSignal() {
    if (displayNumber[0] != "-") {
        displayNumber = "-" + displayNumber;
    } else {
        displayNumber = displayNumber.slice(1, displayNumber.length);
    }
    updateDisplay();
};

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
    numbers = [result];
    operator = "";
    displayNumber = result;
    updateDisplay();
    displayNumber = "";
    return result;
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
};
