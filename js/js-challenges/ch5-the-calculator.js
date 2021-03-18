// DRY = Don't Repeat Yourself
function squareNumber(number) {
  let result = number * number;
  console.log(
    "The result of squaring the number " + number + " is " + result + "."
  );
  return result;
}

function halfNumber(number) {
  let result = number / 2;
  console.log("Half of " + number + " is " + result + ".");
  return result;
}

function percentOf(percent, number) {
  let result = (percent / 100) * number;
  console.log(result + " is " + percent + "% of " + number + ".");
  return result;
}

function areaOfCircle(radius) {
  let result = (3.14 * radius * radius).toFixed(2);
  console.log(
    "The area for a circle with radius " + radius + " is " + result + "."
  );
  return result;
}

function allInOne(number) {
  squareNumber(number);
  halfNumber(number);
  percentOf(50, number);
  areaOfCircle(number);
}

allInOne(5);
