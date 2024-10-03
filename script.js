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

let isTurnedOn = true;

let first = null;
let second = null;

let waitingForResult = false;

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
            if(second === 0) {
                numbers.textContent = "CACA";
                first = 0;
                second = null;
                return;
            }
            result = first / second;
            break;
        default:
            result = first;
    }
    numbers.textContent = result.toString();
    first = result;
    second = null;
}

function startListeners() {
    startNumberListeners();
    startOperationListeners();
    startFunctionalityListeners();
    startOnOffListeners();
}

function startNumberListeners() {
    frame.addEventListener("click", (e) => {
        if(!isTurnedOn) {
            return;
        }
        switch(e.target.id) {
            case "zero":
                if(waitingForResult) {
                    numbers.textContent = "0";
                    waitingForResult = false;
                } else if(numbers.textContent !== "0") {
                    numbers.textContent += "0";
                }
                break;
            case "one":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "1";
                } else {
                    numbers.textContent += "1";
                }
                break;
            case "two":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "2";
                    waitingForResult = false;
                } else {
                    numbers.textContent += "2";
                }
                break;
            case "three":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "3";
                    waitingForResult = false;
                } else {
                    numbers.textContent += "3";
                }
                break;
            case "four":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "4";
                    waitingForResult = false;
                } else {
                    numbers.textContent += "4";
                }
                break;
            case "five":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "5";
                    waitingForResult = false;
                } else {
                    numbers.textContent += "5";
                }
                break;
            case "six":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "6";
                    waitingForResult = false;
                } else {
                    numbers.textContent += "6";
                }
                break;
            case "seven":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "7";
                    waitingForResult = false;
                } else {
                    numbers.textContent += "7";
                }
                break;
            case "eight":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "8";
                    waitingForResult = false;
                } else {
                    numbers.textContent += "8";
                }
                break;
            case "nine":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "9";
                    waitingForResult = false;
                } else {
                    numbers.textContent += "9";
                }
                break;
            case "comma":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "0.";
                    waitingForResult = false;
                } else {
                    numbers.textContent += ".";
                }
                break;
        }
    });
}

function startOperationListeners() {
    frame.addEventListener("click", (e) => {
        if(!isTurnedOn) {
            return;
        }
        switch(e.target.id) {
            case "add":
                if(waitingForResult) {
                    operation.textContent = "+";
                    break;
                }
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                if(first !== null && second !== null) {
                    operate();
                }
                operation.textContent = "+";
                waitingForResult = true;
                break;
            case "subtract":
                if(waitingForResult) {
                    operation.textContent = "-";
                    break;
                }
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                if(first !== null && second !== null) {
                    operate();
                }
                operation.textContent = "-";
                waitingForResult = true;
                break;
            case "multiply":
                if(waitingForResult) {
                    operation.textContent = "×";
                    break;
                }
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                if(first !== null && second !== null) {
                    operate();
                }
                operation.textContent = "×";
                waitingForResult = true;
                break;
            case "divide":
                if(waitingForResult) {
                    operation.textContent = "÷";
                    break;
                }
                if(first === null) {
                    first = +numbers.textContent;
                } else {
                    second = +numbers.textContent;
                }
                if(first !== null && second !== null) {
                    operate();
                }
                operation.textContent = "÷";
                waitingForResult = true;
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
                waitingForResult = true;
                break;
        }
    });
}

function startFunctionalityListeners() {
    frame.addEventListener("click", (e) => {
        if(!isTurnedOn) {
            return;
        }
        switch(e.target.id) {
            case "clear":
                numbers.textContent = "0";
                operation.innerHTML = "&nbsp";
                first = null;
                second = null;
                waitingForResult = false;
                break;
            case "backspace":
                if(numbers.textContent.length > 1) {
                    numbers.textContent = numbers.textContent.slice(0, numbers.textContent.length - 1);
                } else {
                    numbers.textContent = "0";
                }
                break;
        }
    });
}

function startOnOffListeners() {
    frame.addEventListener("click", (e) => {
        if(e.target.id === "on-off") {
            isTurnedOn = !isTurnedOn;
            if(isTurnedOn == false) {
                numbers.innerHTML = "&nbsp";
                operation.innerHTML = "&nbsp";
            } else {
                numbers.textContent = "0";
                operation.innerHTML = "&nbsp";
            }
        }
    });
}