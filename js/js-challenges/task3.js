let shoppingCart = [
  {
    name: "loaf of bread",
    type: "food",
    quantity: 1,
    price: 0.85,
  },
  {
    name: "multipack beans",
    type: "food",
    quantity: 2,
    price: 1,
  },
  {
    name: "mushrooms",
    type: "food",
    quantity: 10,
    price: 0.1,
  },
  {
    name: "can of beer",
    type: "alcohol",
    quantity: 4,
    price: 1.1,
  },
  {
    name: "prosecco",
    type: "alcohol",
    quantity: 1,
    price: 8.99,
  },
  {
    name: "steak",
    type: "food",
    quantity: 2,
    price: 3.99,
  },
  {
    name: "blue cheese",
    type: "food",
    quantity: 1,
    price: 2.99,
  },
  {
    name: "candles",
    type: "home",
    quantity: 3,
    price: 1.99,
  },
  {
    name: "cheesecake",
    type: "food",
    quantity: 1,
    price: 4.99,
  },
  {
    name: "onions",
    type: "food",
    quantity: 3,
    price: 0.4,
  },
];

function shoppingTotal(cart, discountAmount, type) {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].type === type) {
      totalPrice +=
        (cart[i].price * cart[i].quantity * (100 - discountAmount)) / 100;
    } else totalPrice += cart[i].price * cart[i].quantity;
  }
  return totalPrice.toFixed(2);
}

// document.write(`Total price is: ${shoppingTotal(shoppingCart, 20, "home")}`);
// document.write(`Total price is: ${shoppingTotal(shoppingCart, 99, "food")}`);
// document.write(`Total price is: ${shoppingTotal(shoppingCart, 1, "alcohol")}`);
// document.write(`Total price is: ${shoppingTotal(shoppingCart, 85, "home")}`);

function ted(cart, lowPrice, highPrice, quantity) {
  let arrItems = [];
  for (let i = 0; i < cart.length; i++) {
    let itemPrice = cart[i].price * cart[i].quantity;
    if (quantity === true) {
      if (itemPrice >= lowPrice && itemPrice <= highPrice) {
        arrItems.push(cart[i]);
      }
    } else {
      if (cart[i].price >= lowPrice && cart[i].price <= highPrice) {
        arrItems.push(cart[i]);
      }
    }
  }
  return arrItems;
}

// console.log(ted(shoppingCart, 0.1, 1, true));
// console.log(ted(shoppingCart, 0.1, 1, false));

var numbers = [9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 23, 24, 24, 25];
var numbers2 = [9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 23, 24, 24];
let linearArrNumbers = [1, 3, 5, 7, 9, 23, 78];

/* Average and mean are measures of central tendency. 
They tell us what is the most typical number in a data set, 
or which number best represents all the numbers in the data set.
*/
function mean(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
    //console.log(total);
  }
  return total / numbers.length;
}

console.log(`mean: ${mean(numbers)}`);

/* The mode is the number in a data set that occurs most frequently. 
Count how many times each number occurs in the data set. 
The mode is the number with the highest tally. 
It's ok if there is more than one mode. 
And if all numbers occur the same number of times there is no mode.
*/
function mode(numbers) {
  var numberCounts = {};
  for (var i = 0; i < numbers.length; i++) {
    var keyName = numbers[i].toString(); // obj keys need to be strings

    // if numberCounts already has a key of numbers[i]
    if (numberCounts.hasOwnProperty(keyName)) {
      numberCounts[keyName] += 1;
    }
    // else create the key numbers[i] and set it to 1
    else {
      numberCounts[keyName] = 1;
    }
  }

  numberCountsArray = [];
  for (var key in numberCounts) {
    numberCountsArray.push([key, numberCounts[key]]);
  }

  numberCountsArray.sort(function (a, b) {
    return a[1] - b[1];
  });
  numberCountsArray.reverse();

  var firstMode = parseInt(numberCountsArray[0][0]);
  var firstModeCount = parseInt(numberCountsArray[0][1]);
  var results = [firstMode];

  if (numberCountsArray[1][1] != firstModeCount) {
    // there's only one mode
    return [results];
  } else {
    // there are at least two equal modes
    for (i = 1; i < numberCountsArray.length; i++) {
      thisNumberCount = parseInt(numberCountsArray[i][1]);
      if (thisNumberCount == firstModeCount) {
        results.push(parseInt(numberCountsArray[i]));
      }
    }
  }
  // sort results
  results.sort(function (a, b) {
    return a[1] - b[1];
  });
  // then reverse the list
  results.reverse();
  //console.log(results);
  return results;
}

console.log(`mode: ${mode(numbers)}`);

/* The median is the central number of a data set. 
Arrange data points from smallest to largest and locate the central number. 
This is the median. If there are 2 numbers in the middle, 
the median is the average of those 2 numbers.
*/

function median(numbers) {
  // Sort the array
  numbers.sort(function (a, b) {
    return a - b;
  });

  // If numbers.length is odd, return the middle value: numbers[floor(length / 2)]
  if (numbers.length % 2 != 0) {
    return numbers[Math.floor(numbers.length / 2)];
  } else {

  /* If numbers.length is even, return the average of the two middle values
  numbers[number.length / 2] and numbers([numbers.length / 2) - 1]
  */
    var midpoint = numbers.length / 2;
    return (numbers[midpoint] + numbers[midpoint - 1]) / 2;
  }
}

console.log(`median: ${median(numbers)}`);
