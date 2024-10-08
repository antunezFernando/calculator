let frame = document.querySelector("#frame");

let operation = document.querySelector("#operation-input");
let numbers = document.querySelector("#number-input");

let urlArray = [
    "./images/wood.jpg",
    "./images/dark-sand.jpg",
    "./images/rain.jpg",
    "./images/metal.jpg",
    "./images/galaxy.jpg"
];

let first = null;
let second = null;

let isTurnedOn = true;
let waitingForResult = false;
let equalJustPressed = false;

let showCreditsButton = document.querySelector("#credits-button");
let credits = document.querySelector("#credits");
let closeCreditsButton = document.getElementsByClassName("close")[0];

setBackgroundImage();
startListeners();

function operate() {
    let result;
    switch (operation.textContent) {
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
            if (second === 0) {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                document.querySelector("#clear").click();
                return;
            }
            result = first / second;
            break;
        default:
            result = first;
    }
    numbers.textContent = result.toString().length < 14 ? result.toString() :
        result.toExponential().toString().length < 14 ?
            result.toExponential().toString() :
            result.toString().slice(0, 13);
    first = +numbers.textContent;
    second = null;
}

function startListeners() {
    frame.addEventListener("click", (e) => {
        startNumberListeners(e);
        startOperationListeners(e);
        startFunctionalityListeners(e);
        startOnOffListeners(e);
    });
    frame.addEventListener("mousedown", (e) => {
        startMouseDownListeners(e);
    });
    frame.addEventListener("mouseup", (e) => {
        startMouseUpListeners(e);
    });
    window.addEventListener("keydown", (e) => {
        startKeyboardListeners(e);
    });
    showCreditsButton.addEventListener("click", () => {
        credits.style.display = "block";
    });
    closeCreditsButton.addEventListener("click", () => {
        credits.style.display = "none";
    });
    window.addEventListener("click", (e) => {
        if(e.target === credits) {
            credits.style.display = "none";
        }
    });
}

function startNumberListeners(event) {
    if (!isTurnedOn) {
        return;
    }

    if (numbers.textContent.length === 13 && !waitingForResult) {
        return;
    }

    function handleOneToNine(number) {
        if (numbers.textContent === "0" || waitingForResult) {
            numbers.textContent = number;
            waitingForResult = false;
        } else {
            numbers.textContent += number;
        }
    }

    switch (event.target.id) {
        case "zero":
            if (waitingForResult) {
                numbers.textContent = "0";
                waitingForResult = false;
            } else if (numbers.textContent !== "0") {
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
            if (numbers.textContent === "0" || waitingForResult) {
                numbers.textContent = "0.";
                waitingForResult = false;
            } else if (numbers.textContent.indexOf(".") < 0) {
                numbers.textContent += ".";
            }
            break;
    }
}

function startOperationListeners(event) {
    if (!isTurnedOn) {
        return;
    }

    function handleOperation(sign) {
        if (waitingForResult) {
            if (equalJustPressed) {
                first = +numbers.textContent;
                equalJustPressed = false;
            } else {
                operation.textContent = sign;
                return;
            }
        }
        if (first === null) {
            first = +numbers.textContent;
        } else {
            second = +numbers.textContent;
        }
        if (first !== null && second !== null) {
            operate();
        }
        operation.textContent = sign;
        waitingForResult = true;
    }

    switch (event.target.id) {
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
            if (first === null) {
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
}

function startFunctionalityListeners(event) {
    if (!isTurnedOn) {
        return;
    }

    switch (event.target.id) {
        case "clear":
            numbers.textContent = "0";
            operation.innerHTML = "&nbsp";
            first = null;
            second = null;
            waitingForResult = false;
            break;
        case "backspace":
            if (numbers.textContent.length > 1 && !waitingForResult) {
                numbers.textContent = numbers.textContent.slice(0, numbers.textContent.length - 1);
            } else {
                numbers.textContent = "0";
            }
            break;
        case "mystery":
            setBackgroundImage();
            break;
    }
}

function startOnOffListeners(event) {
    if (event.target.id === "on-off") {
        isTurnedOn = !isTurnedOn;
        if (isTurnedOn == false) {
            numbers.innerHTML = "&nbsp";
            operation.innerHTML = "&nbsp";
        } else {
            numbers.textContent = "0";
            operation.innerHTML = "&nbsp";
        }
    }
}

function startMouseDownListeners(event) {
    switch (event.target.id) {
        case "zero": case "comma": case "equal": case "add":
        case "one": case "two": case "three": case "subtract":
        case "four": case "five": case "six": case "multiply":
        case "seven": case "eight": case "nine": case "divide":
        case "on-off": case "clear": case "mystery": case "backspace":
            document.querySelector(`#${event.target.id}`).classList.remove("normal-shadow");
            document.querySelector(`#${event.target.id}`).classList.add("pressed-shadow");
            break;
    }
}

function startMouseUpListeners(event) {
    switch (event.target.id) {
        case "zero": case "comma": case "equal": case "add":
        case "one": case "two": case "three": case "subtract":
        case "four": case "five": case "six": case "multiply":
        case "seven": case "eight": case "nine": case "divide":
        case "on-off": case "clear": case "mystery": case "backspace":
            document.querySelector(`#${event.target.id}`).classList.remove("pressed-shadow");
            document.querySelector(`#${event.target.id}`).classList.add("normal-shadow");
            break;
    }
}

function startKeyboardListeners(event) {
    if (!isTurnedOn) {
        return;
    }

    switch (event.key) {
        case "0":
            document.querySelector("#zero").click();
            break;
        case "1":
            document.querySelector("#one").click();
            break;
        case "2":
            document.querySelector("#two").click();
            break;
        case "3":
            document.querySelector("#three").click();
            break;
        case "4":
            document.querySelector("#four").click();
            break;
        case "5":
            document.querySelector("#five").click();
            break;
        case "6":
            document.querySelector("#six").click();
            break;
        case "7":
            document.querySelector("#seven").click();
            break;
        case "8":
            document.querySelector("#eight").click();
            break;
        case "9":
            document.querySelector("#nine").click();
            break;
        case ".":
            document.querySelector("#comma").click();
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
        case "Delete":
            document.querySelector("#clear").click();
            break;
    }
}

function setBackgroundImage() {
    let rand = Math.floor(Math.random() * urlArray.length);
    let url = urlArray[rand];

    while (`url("${url}")` === document.querySelector("body").style.backgroundImage) {
        rand = Math.floor(Math.random() * urlArray.length);
        url = urlArray[rand];
    }

    document.querySelector("body").style.backgroundImage = `url(${url})`;
}