console.log("This is the script for Module2 Lesson 2");

// Q1
var winningNumbers = [1, 76, 2, 78, 16, 7];
// the third item has an index of 2
var thirdItem = winningNumbers[2];
console.log(thirdItem);

// Q2
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
// add a new item
vegetables.push("ice cream");
// item count
var itemCount = vegetables.length;

console.log(itemCount);

// Q3
var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
    console.log(randomThings[i]);
}

// or
var itemCount = randomThings.length;

for (var i = 0; i < itemCount; i++) {
    var item = randomThings[i];
    console.log(item);
}

// Q4
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];
for (var i = 0; i < moreThings.length; i++) {

    var typeOfItem = typeof moreThings[i];
    if (typeOfItem === "number") {
        console.log(moreThings[i]);
    }
}

// Q5
var ingredients = ["water", "flour", "toothpaste", "fish lips"];
var sortedIngredients = ingredients.sort();
for (var i = 0; i < sortedIngredients.length; i++) {
    console.log(sortedIngredients[i]);
}

// Q6
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {
    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}