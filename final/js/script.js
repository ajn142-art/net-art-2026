document.addEventListener("DOMContentLoaded", function () {
  let stage = 0;

  const message = document.getElementById("message");
  const sun = document.querySelector(".sun");
  const plants = document.querySelectorAll(".plant");
  const sky = document.querySelector(".sky");

  document.body.addEventListener("click", function () {
    stage++;

    if (stage === 1) {
      plants.forEach(function (plant, index) {
        setTimeout(function () {
          plant.classList.add("alive");
        }, index * 180);
      });

      message.textContent = "The garden is waking...";
    }

    if (stage === 2) {
      document.body.style.background =
        "linear-gradient(to bottom, #182d1d, #3f704d)";
      message.textContent = "Life is returning...";
    }

    if (stage === 3) {
      document.body.style.background =
        "linear-gradient(to bottom, #87ceeb, #d8f6ff)";
      document.body.style.color = "#183d20";

      sky.style.opacity = "0";

      sun.style.opacity = "1";
      sun.style.transform = "scale(1)";

      message.textContent = "Dead Garden is alive 🌱";
    }

    if (stage > 3) {
      stage = 0;

      plants.forEach(function (plant) {
        plant.classList.remove("alive");
      });

      document.body.style.background = "#070707";
      document.body.style.color = "white";

      sun.style.opacity = "0";
      sun.style.transform = "scale(0.3)";
      sky.style.opacity = "1";

      message.textContent = "Click to awaken the garden";
    }
  });
});