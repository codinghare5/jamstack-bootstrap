function drinkOrder(size, drink) {
  let strMessage = "You have orderd a " + size;
  switch (drink) {
    case "cola":
      strMessage += " Cola";
      break;
    case "lemon":
      strMessage += " Lemonade";
      break;
    case "orange":
      strMessage += " Orangade";
      break;
    default:
      strMessage = "You have ordered a drink we don't sell";
      break;
  }
  if (size != "large" && size != "medium" && size != "large") {
    strMessage = "You have ordered a size we don't sell";
  }
  return strMessage;
}

let order1 = drinkOrder("small", "cola");
let order2 = drinkOrder("medium", "lemon");
let order3 = drinkOrder("large", "orange");
let order4 = drinkOrder("alex", "cola");
let order5 = drinkOrder("large", "alex");

console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4);
console.log(order5);
