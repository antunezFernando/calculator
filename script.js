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

startListeners()

function operate() {
    let result;
    if(operation.textContent === "+") {
        result = first + second;
    }
    numbers.textContent = result.toString();
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
                if(numbers.textContent === "0") {
                    numbers.textContent = "1";
                } else {
                    numbers.textContent += "1";
                }
                break;
            case "two":
                if(numbers.textContent === "0") {
                    numbers.textContent = "2";
                } else {
                    numbers.textContent += "2";
                }
                break;
            case "three":
                if(numbers.textContent === "0") {
                    numbers.textContent = "3";
                } else {
                    numbers.textContent += "3";
                }
                break;
            case "four":
                if(numbers.textContent === "0") {
                    numbers.textContent = "4";
                } else {
                    numbers.textContent += "4";
                }
                break;
            case "five":
                if(numbers.textContent === "0") {
                    numbers.textContent = "5";
                } else {
                    numbers.textContent += "5";
                }
                break;
            case "six":
                if(numbers.textContent === "0") {
                    numbers.textContent = "6";
                } else {
                    numbers.textContent += "6";
                }
                break;
            case "seven":
                if(numbers.textContent === "0") {
                    numbers.textContent = "7";
                } else {
                    numbers.textContent += "7";
                }
                break;
            case "eight":
                if(numbers.textContent === "0") {
                    numbers.textContent = "8";
                } else {
                    numbers.textContent += "8";
                }
                break;
            case "nine":
                if(numbers.textContent === "0") {
                    numbers.textContent = "9";
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
                operation.textContent = "+";
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                numbers.textContent = "0";
                break;
            case "subtract":
                operation.textContent = "-";
                first = +numbers.textContent;
                break;
            case "multiply":
                operation.textContent = "×";
                first = +numbers.textContent;
                break;
            case "divide":
                operation.textContent = "÷";
                first = +numbers.textContent;
                break;
            case "equal":
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                operate()
                break;
        }
    });
}