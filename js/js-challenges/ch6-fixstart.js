// Create a function called fixStart. It should take a single argument,
// a string, and return a version where all occurrences of
// its first character have been replaced with ‘*’, except
// for the first character itself.
// You can assume that the string is at least one character long.
// For example:
// fixStart('babble'): 'ba**le'
// fixStart('turtle'): 'tur*le'

// FUNCTION fixStart(word)
function fixStart(word) {
  // SPLIT the word into array of letters and store it inside new variable
  let newWord = word.split("");
  // STORE the first letter in a variable
  const firstLetter = newWord.splice(0, 1);
  // LOOP through remaining letters of the string
  for (let i = 0; i < word.length; i++) {
    // IF the current letter is equal to the stored one
    if (newWord[i] == firstLetter) {
      // THEN SWAP the letter with an *
      newWord[i] = "*";
      // ELSE
    } else {
      // THEN continue
      continue;
    }
    // END LOOP
  }
  return firstLetter + newWord.join("");
}

console.log(fixStart("babble"));
console.log(fixStart("turtle"));
