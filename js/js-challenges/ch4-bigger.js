// DRY = Don't Repeat Yourself
function biggerNumber(a, b) {
  var message = "";
  if (a > b) {
    message;
    return a;
  } else if (a === b) {
    message += "ERROR: Numbers are equal.";
    return message;
  } else if (isNaN(a) || isNaN(b)) {
    message += "ERROR: Try to put numbers!";
    return message;
  } else return b;
}

console.log(biggerNumber(5, 8));
console.log(biggerNumber(6, 1));
console.log(biggerNumber(3, 3));
console.log(biggerNumber(7, "w"));
