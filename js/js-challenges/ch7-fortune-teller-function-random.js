// Write a function named tellFortune that:

// takes 4 arguments: number of children, partner’s name, geographic location, job title.
// outputs your fortune to the screen like so: “You will be a X in Y, and married to Z with N kids.”
// Call that function 3 times with 3 different values for the arguments.

const numberOfChildren = 5;
const arrayPartnersName = ["Synthia", "Joana", "Patricia", "Alexandra"];
const arrayGeographicLocation = ["Ontario", "Mobile", "Tempe", "Aurora"];
const arrayJobTitle = [
  "Web Designer",
  "UX Designer",
  "Graphics Designer",
  "Product Designer",
];

function tellFortune() {
  console.log(
    "You will be a " +
      arrayJobTitle[Math.floor(Math.random() * 4)] +
      " in " +
      arrayGeographicLocation[Math.floor(Math.random() * 4)] +
      ", and married to " +
      arrayPartnersName[Math.floor(Math.random() * 4)] +
      " with " +
      Math.floor(Math.random() * numberOfChildren) +
      " kids."
  );
}

for (var i = 0; i < 3; i++) {
  tellFortune();
}
