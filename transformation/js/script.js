let clicked = false;

document.body.addEventListener("click", function () {
  if (!clicked) {
    clicked = true;

    // change background
    document.body.style.backgroundColor = "#87ceeb";

    // change title
    document.getElementById("title").innerText = "Blooming Garden";

    // change flowers
    let flowers = document.querySelectorAll(".flower");

    flowers.forEach(function (flower) {
      flower.style.backgroundColor = "pink";
      flower.style.width = "60px";
      flower.style.height = "60px";
    });
  }
});