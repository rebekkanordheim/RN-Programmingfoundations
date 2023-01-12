console.log("This is script 2");

// Lesson task in making decisions
// Q1
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}

// Q2
var age = 11;
var minimumAge = "13";

if (age >= parseInt(minimumAge)) {
    console.log("Minimum age met");
} else {
    console.log("Minimum age not met");
}

// Q3
var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) <= parseFloat(maximumIncome)) {
    console.log("Maximum income requirement met");
} else {
    console.log("Maximum income requirement not met");
}


// Q4
var color = "Blue";

if ((color === "orange")); {
console.log("This colour is a bit rubbish");
}

// Q5
var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not paid");
}

// Q6
var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
    console.log("You lose again");
}

// Q7
var dayOfTheWeek = 2;
var dayName;

switch (dayOfTheWeek) {
    case 1:
        dayName = "Monday";
        break;
    
    case 2: 
        dayName = "Tuesday";
        break;
    
    case 3: 
        dayName = "Wednesday";
        break;
    
    case 4:
        dayName = "Thursday";
        break;
    
    case 5:
        dayName = "Friday";
        break;
    
    case 6: 
        dayName = "Saturday";
        break;
    
    case 7:
        dayName = "Sunday";
        break;

    default: 
        dayName = "Invalid day number";
        break;
}
console.log(dayName);