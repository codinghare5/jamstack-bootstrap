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

function mean(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
    //console.log(total);
  }
  return total / numbers.length;
}

console.log(mean(numbers));

function median(numbers) {
  let median = 0;
  let lenght = numbers.length;
  let sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
  });
  // let sortedNumbers = numbers.sort();
  console.log(sortedNumbers);
  // Even
  if (lenght % 2 === 0) {
    console.log(numbers[lenght / 2]);
    console.log(numbers[lenght / 2 - 1]);
    median = (numbers[lenght / 2] + numbers[length / 2 - 1]) / 2;
  }
  // Odd
  else {
    median = numbers[(length - 1) / 2];
  }
  return median;
}

function median2(numberlist) {
  var sortedList = numberlist.sort();
  console.log(sortedList);
  var index = numberlist.length / 2;
  if (Number.isInteger(index))
    return (sortedList[index] + sortedList[index - 1]) / 2;
  else return sortedList[Math.floor(index)];
}

console.log(median2(numbers));
