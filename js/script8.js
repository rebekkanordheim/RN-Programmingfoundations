//Q1 Declare and call a function that logs the string "What the func is this nonsense?"
function logSentence() {
    console.log("What the func is this nonsense?");
}
logSentence();

//Q2 
function logName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log(fullName);
}

logName("Randolph", "Reindeer");

//Q3
function multiply(firstNumber, secondNumber) {
    var typeOfFirstNumber = typeof firstNumber;
    var typeOfSecondNumber = typeof secondNumber;

    if (typeOfFirstNumber !== "number" || typeOfSecondNumber !== "number") {
        return "Please supply number values";
    }

    return firstNumber * secondNumber;
}
var result = multiply(10, 4);
console.log(result);

//Q4
function addition(num1, num2, num3) {
    // try and convert all the arguments to number values
    var convertedNum1 = parseFloat(num1);
    var convertedNum2 = parseFloat(num2);
    var convertedNum3 = parseFloat(num3);

    // if any of the arguments cannot be converted to a number they will have the value NaN - Not a Number
    // check for a NaN value using isNaN()
    if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)) {
        // as soon as a return statement is encountered the function will exit
        return "Invalid argument types";
    }

    return convertedNum1 + convertedNum2 + convertedNum3;

}

// select the p element
var paragraph = document.querySelector("p");

var sum = addition(6, true, "f");

paragraph.innerHTML = sum;

//Q5 
var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function () {
    var heading = document.querySelector("h1");
    heading.innerHTML += ": Updated";
};

//Q6 
var buttonTitle = document.querySelector(".title");

function changeTitle() {
    document.title = "I've been updated";
}

buttonTitle.onclick = changeTitle;

//Q7
var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");
//this function will be called by the other functions
function changeBackground(colour) {
    document.body.style.backgroundColor = colour;
}

redButton.onclick = function () {
    changeBackground("red");
};

orangeButton.onclick = function () {
    changeBackground("orange");
};

pinkButton.onclick = function () {
    changeBackground("pink");
};
