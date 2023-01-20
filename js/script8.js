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

//