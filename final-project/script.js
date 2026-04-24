let stage = 0;

document.addEventListener("click", function () {
  stage++;

  // Stage 1: plants grow
  if (stage === 1) {
    document.querySelectorAll(".plant").forEach(function (p) {
      p.classList.add("alive");
    });
    document.getElementById("message").textContent = "The garden is waking up...";
  }

  // Stage 2: background changes
  if (stage === 2) {
    document.body.style.backgroundColor = "green";
    document.getElementById("message").textContent = "Life is returning...";
  }

  // Stage 3: sky + sun
  if (stage === 3) {
    document.body.style.backgroundColor = "skyblue";
    document.body.style.color = "black";
    document.querySelector(".sun").style.opacity = "1";
    document.getElementById("message").textContent = "The garden is alive 🌱";
  }
});