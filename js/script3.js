console.log("questions for the Loops module coming up");

// Q1
//do the loop while i is less than 8
for (var i = 0; i < 8; i++) {
    console.log(i);
}

// Q2
// set the starting value to 10
// loop while i is greater than 0
// instead of adding 1 to i each time the loop is exceuted using i++
// subtract 1 from i using i--
for (var i = 10; i > 0; i--) {
    console.log(i);
}

// Q3
// start at 10, and loop while i is less than or equal to 20
// use the remainder operator to determine if the number is odd
// any number that returns a remainder after being divided by 2 is an odd number
for (var i = 10; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
