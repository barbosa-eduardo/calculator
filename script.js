const DIGITS = "0123456789";
const OPERATORS = "+-*/%";
const FUNCTIONS = ["AC", "+/-", ".", "DEL", "="];
let numbers = [];
let operator = "";
let displayNumber = "";
const calculatorDisplay = document.querySelector(".display");

document.addEventListener("keydown", (event) => {
    let key = event.key;
    console.log(key);
    if (key == "Enter") {
        key = "=";
    } else if (key == "Backspace") {
        key = "DEL";
    } else if (key == "Delete") {
        key = "AC";
    };
    input(key);
});

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
            case "DEL":
                deleteLastDigit();
                break;
            case "=":
                if (numbers.length >= 2 || (numbers.length >= 1 && displayNumber != "")){
                    moveToNextNumber();
                    operate();
                }
                break;
        };
    };
};

function addDigit(inputDigit) {
    if (!DIGITS.includes(inputDigit)) {
        return;
    };
    if (numbers.length >= 1 && operator == "") {
        reset();
    }
    displayNumber += inputDigit;
    updateDisplay();
};

function deleteLastDigit() {
    displayNumber = displayNumber.slice(0, displayNumber.length-1);
    updateDisplay();
}

function setOperator(inputOperator) {
    if (!OPERATORS.includes(inputOperator)) {
        return;
    };
    operator = inputOperator;
};

function updateDisplay() {
    if (displayNumber.length > 16) {
        reset();
        calculatorDisplay.innerText = "OVERFLOW";
    } else {
        calculatorDisplay.innerText = displayNumber;
    }
};

function moveToNextNumber() {
    if (displayNumber != "") {
        let value = 0;
        if (displayNumber.includes(".")) {
            let valueString = Number.parseFloat(displayNumber).toFixed(2);
            value = Number.parseFloat(valueString);
        } else {
            value = Number.parseInt(displayNumber);
        };
        numbers.push(value);
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
    };
    updateDisplay();
};

function addFloatingPoint() {
    if (!displayNumber.includes(".")) {
        displayNumber += ".";
    };
};

function operate() {
    if (numbers.length <= 1 || operator == "") {
        return;
    }
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
            if (numbers[1] == 0) {
                displayError();
                return;
            }
            result = divide();
            break;
        case '%':
            result = percentage()
            break;
    };
    numbers = [result];
    operator = "";
    displayNumber = result.toFixed(2);
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

function percentage() {
    let result = numbers[1] * (numbers[0] / 100);
    return result;
};

function displayError() {
    reset();
    calculatorDisplay.innerText = "ERROR";
}