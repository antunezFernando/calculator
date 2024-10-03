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
let equalJustPressed = false;

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
    startKeyboardListeners();
}

function startNumberListeners() {
    frame.addEventListener("click", (e) => {
        if(!isTurnedOn) {
            return;
        }

        function handleOneToNine(number){
            if(numbers.textContent === "0" || waitingForResult) {
                numbers.textContent = number;
                waitingForResult = false;
            } else {
                numbers.textContent += number;
            }
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
                handleOneToNine("1");
                break;
            case "two":
                handleOneToNine("2");
                break;
            case "three":
                handleOneToNine("3");
                break;
            case "four":
                handleOneToNine("4");
                break;
            case "five":
                handleOneToNine("5");
                break;
            case "six":
                handleOneToNine("6");
                break;
            case "seven":
                handleOneToNine("7");
                break;
            case "eight":
                handleOneToNine("8");
                break;
            case "nine":
                handleOneToNine("9");
                break;
            case "comma":
                if(numbers.textContent === "0" || waitingForResult) {
                    numbers.textContent = "0.";
                    waitingForResult = false;
                } else if(numbers.textContent.indexOf(".") < 0) {
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

        function handleOperation(sign) {
            if(waitingForResult) {
                if(equalJustPressed) {
                    first = +numbers.textContent;
                    equalJustPressed = false;
                } else {
                    operation.textContent = sign;
                    return;
                }
            }
            if(first === null) {
                first = +numbers.textContent;
            } else {
                second = +numbers.textContent;
            }
            if(first !== null && second !== null) {
                operate();
            }
            operation.textContent = sign;
            waitingForResult = true;
        }

        switch(e.target.id) {
            case "add":
                handleOperation("+");
                break;
            case "subtract":
                handleOperation("-");
                break;
            case "multiply":
                handleOperation("×");
                break;
            case "divide":
                handleOperation("÷");
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
                waitingForResult = true; //avoids concatenating result with numbers when pressing one after equal
                equalJustPressed = true; //allows to operate on the result after pressing equal
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
                if(numbers.textContent.length > 1 && !waitingForResult) {
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

function startKeyboardListeners() {
    window.addEventListener("keydown", (e) => {
        if(!isTurnedOn) {
            return;
        }
        switch(e.key) {
            case "0":
                zero.click();
                break;
            case "1":
                one.click();
                break;
            case "2":
                two.click();
                break;
            case "3":
                three.click();
                break;
            case "4":
                four.click();
                break;
            case "5":
                five.click();
                break;
            case "6":
                six.click();
                break;
            case "7":
                seven.click();
                break;
            case "8":
                eight.click();
                break;
            case "9":
                nine.click();
                break;
            case ".":
                comma.click();
                break;
            case "+":
                document.querySelector("#add").click();
                break;
            case "-":
                document.querySelector("#subtract").click();
                break;
            case "*":
                document.querySelector("#multiply").click();
                break;
            case "/":
                document.querySelector("#divide").click();
                break;
            case "Enter":
                document.querySelector("#equal").click();
                break;
            case "Backspace":
                document.querySelector("#backspace").click();
                break;
        }
    });
}