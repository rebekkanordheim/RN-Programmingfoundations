console.log("This is script 7");

//Q1 Console log the price property from the object below:
var product = {
	name: "Chicken feet",
	price: 149.99,
};
console.log(product.price);
//or
var productPrice = product.price;
console.log(product.price);

//Q2 Loop through the array below and console log each colour property.
var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];

for (var i = 0; i < animals.length; i++) {
    console.log(animals[i].colour)
}
//or assign the length of the array to a variable and then use the variable in the for loop
var animalCount = animals.length;
for (var i = 0; i < animalCount; i++) {
    var animalColour = animals[i].colour;
    console.log(animalColour);
}

// Q3 Loop through the array below and console log each name property only if it is on special.
var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];
for (var i = 0; i < dinnerOptions.length; i++) {

    // check if onSpecial is true
    // shorthand for if (dinnerOptions[i].onSpecial === true)
    if (dinnerOptions[i].onSpecial) {
        console.log(dinnerOptions[i].name);
    }
}
//or
for (var i = 0; i < dinnerOptions.length; i++) {

    // assign the properties to variables
    var isOnSpecial = dinnerOptions[i].onSpecial;
    var productName = dinnerOptions[i].name;

    if (isOnSpecial === true) {
        console.log(productName);
    }
}

//Q4 Loop through the array below and log each person's name and surname if they are between the ages of 20 and 50 (including 20 and 50):
var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];

for (var i = 0; i < people.length, i++) {
    var age = people[i].age;
    var fullName = people[i].firstName + " " + people[i].lastName;
    
    if (age >= 20 && age <= 50) {
        console.log(fullName);
    }
}