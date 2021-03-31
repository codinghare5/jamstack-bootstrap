// Task4
const buttons = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
var textSearch = document.getElementById("searchText");
var friendlyMessage = "";

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // reset style of all the buttons
    for (const btn of buttons) {
      btn.style.border = "1px solid black";
    }
    // colour clicked button to green
    this.style.border = "1px solid green";
    // get clicked button's attribute
    var animal = this.getAttribute("animal");
    // get the text from the search input
    typedValue = textSearch.value;
    // Task - add some helper text
    if (typedValue === "" || typedValue == null) {
      friendlyMessage = "You have typed nothing and clicked on " + animal;
    } else friendlyMessage = "You have typed " + typedValue + " and clicked on " + animal;
    var friendlyPtag = document.getElementById("friendly-message");
    friendlyPtag.innerHTML = friendlyMessage;
    // search by alt functionality
    for (let x = 0; x < images.length; x++) {
      var imageAltText = images[x].getAttribute("alt");
      // if button Show All clicked functionality
      if (animal === "all") {
        if (typedValue !== "") {
          if (imageAltText != null && imageAltText.includes(typedValue)) {
            images[x].style.display = "inline-block";
          } else {
            images[x].style.display = "none";
          }
        } else {
          images[x].style.display = "inline-block";
        }
        // if any other button clicked functionality
      } else {
        if (images[x].classList.contains(animal)) {
          if (typedValue !== "") {
            if (imageAltText != null && imageAltText.includes(typedValue)) {
              images[x].style.display = "inline-block";
            } else {
              images[x].style.display = "none";
            }
          } else {
            images[x].style.display = "inline-block";
          }
        } else images[x].style.display = "none";
      }
    }
  });
}
