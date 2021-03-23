// Write a function pluralise that takes in two arguments,
// a number and a word, and returns the plural. For example:

// pluralise(5, 'cat'): '5 cats'
// pluralise(7, 'turtle'): '7 turtles'
// Bonus: Make it handle a few collective nouns like “sheep” and “geese”.

// Bonus reference: https://www.wordexample.com/list/words-same-plural
const arrayUncountable = [
  "hair",
  "sheep",
  "geese",
  "fish",
  "salmon",
  "deer",
  "swine",
  "offspring",
  "aircraft",
];

function pluralise(number, ofThings) {
  var message = "";
  if (number <= 1 || isNaN(number)) {
    console.error("ERROR: Give it a number bigger than 1!");
  } else {
    if (ofThings === "" || ofThings === null) {
      console.error("ERROR: There is nothing to pluralise!");
      // BONUS:
      // used indexOf method to determine if 'ofThings' exists in arrayUncountable
      // used method toLowerCase, because our array is case sensitive
    } else if (
      ofThings.slice(-1) === "s" ||
      arrayUncountable.indexOf(ofThings.toLowerCase()) !== -1
    ) {
      message += number + " " + ofThings;
    } else {
      message += number + " " + ofThings + "s";
    }
  }
  return message;
}

console.log(pluralise(8, "cat"));
console.log(pluralise(2, "bat"));
console.log(pluralise("a", "hey"));
console.log(pluralise(1, "umpf"));
console.log(pluralise(2, "Salmon"));
console.log(pluralise(2, ""));
