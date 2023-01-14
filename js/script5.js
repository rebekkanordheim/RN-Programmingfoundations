console.log("This is script 5");

// Q1
var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()) {
    console.log("The strings are equal");
}
// or
if (requiredName.toUpperCase() === suppliedName.toUpperCase()) {
    console.log("The strings are equal");
}

//Q2
var username = "myusername";
// we're going to use the length property more than once so assign it to a variable
var len = username.length;
console.log(len);

if (len >= 4 && len <= 10) {
    console.log("Acceptable username");
}
else {
    if (len < 4) {
        console.log("Too few characters");
    }

    if (len > 10) {
        console.log("Too many characters");
    }
}

//Q3
var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if(invoicePaid === true && productDispatched === true && customerHasSigned === true)  {
console.log("Order complete");
}
else {
    if (!invoicePaid) {
        console.log("Invoice is not paid");
    }
    if (!productDispatched) {
        console.log("Product is not dispatched");
    }
    if (!customerHasSigned) {
        console.log("Customer has not signed");
    }
}

//Q4
if (!invoicePaid || !productDispatched || !customerHasSigned) {
    if (!invoicePaid) {
        console.log("Invoice is not paid");
    }
    if (!productDispatched) {
        console.log("Product is not dispatched");
    }
    if (!customerHasSigned) {
        console.log("Customer has not signed");
    }
}
else {
    console.log("Order complete");
}