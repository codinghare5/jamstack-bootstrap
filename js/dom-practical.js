// Task3
const button = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var animal = this.getAttribute("animal");
    for (let x = 0; x < images.length; x++) {
      if (animal === "all") {
        images[x].style.display = "block";
      } else {
        if (images[x].classList.contains(animal)) {
          images[x].style.display = "block";
        } else images[x].style.display = "none";
      }
    }
  });
}
