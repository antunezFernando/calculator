let frame = document.querySelector("#frame ");

let operation = document.querySelector("#operation-input");
let numbers = document.querySelector("#number-input");

let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let comma = document.querySelector("#comma");

let first = null;
let second = null;

let waitingForOperation = false;

startListeners();

function operate() {
    let result;
    switch(operation.textContent) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "×":
            result = first * second;
            break;
        case "÷":
            result = first / second;
            break;
    }
    numbers.textContent = result.toString();
    first = result;
    second = null;
}

function startListeners() {
    startNumberListeners();
    startOperationListeners();
}

function startNumberListeners() {
    frame.addEventListener("click", (e) => {
        switch(e.target.id) {
            case "zero":
                if(numbers.textContent !== "0") {
                    numbers.textContent += "0";
                }
                break;
            case "one":
                if(numbers.textContent === "0" || waitingForOperation) {
                    numbers.textContent = "1";
                    waitingForOperation = false;
                } else {
                    numbers.textContent += "1";
                }
                break;
            case "two":
                if(numbers.textContent === "0" || waitingForOperation) {
                    numbers.textContent = "2";
                    waitingForOperation = false;
                } else {
                    numbers.textContent += "2";
                }
                break;
            case "three":
                if(numbers.textContent === "0" || waitingForOperation) {
                    numbers.textContent = "3";
                    waitingForOperation = false;
                } else {
                    numbers.textContent += "3";
                }
                break;
            case "four":
                if(numbers.textContent === "0" || waitingForOperation) {
                    numbers.textContent = "4";
                    waitingForOperation = false;
                } else {
                    numbers.textContent += "4";
                }
                break;
            case "five":
                if(numbers.textContent === "0" || waitingForOperation) {
                    numbers.textContent = "5";
                    waitingForOperation = false;
                } else {
                    numbers.textContent += "5";
                }
                break;
            case "six":
                if(numbers.textContent === "0" || waitingForOperation) {
                    numbers.textContent = "6";
                    waitingForOperation = false;
                } else {
                    numbers.textContent += "6";
                }
                break;
            case "seven":
                if(numbers.textContent === "0" || waitingForOperation) {
                    numbers.textContent = "7";
                    waitingForOperation = false;
                } else {
                    numbers.textContent += "7";
                }
                break;
            case "eight":
                if(numbers.textContent === "0" || waitingForOperation) {
                    numbers.textContent = "8";
                    waitingForOperation = false;
                } else {
                    numbers.textContent += "8";
                }
                break;
            case "nine":
                if(numbers.textContent === "0" || waitingForOperation) {
                    numbers.textContent = "9";
                    waitingForOperation = false;
                } else {
                    numbers.textContent += "9";
                }
                break;
        }
    });
}

function startOperationListeners() {
    frame.addEventListener("click", (e) => {
        switch(e.target.id) {
            case "add":
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                if(first !== null && second !== null) {
                    operate();
                }
                operation.textContent = "+";
                waitingForOperation = true;
                break;
            case "subtract":
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                if(first !== null && second !== null) {
                    operate();
                }
                operation.textContent = "-";
                waitingForOperation = true;
                break;
            case "multiply":
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                if(first !== null && second !== null) {
                    operate();
                }
                operation.textContent = "×";
                waitingForOperation = true;
                break;
            case "divide":
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                if(first !== null && second !== null) {
                    operate();
                }
                operation.textContent = "÷";
                waitingForOperation = true;
                break;
            case "equal":
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                operate();
                first = null;
                operation.innerHTML = "&nbsp";
                break;
        }
    });
}