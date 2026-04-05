// variable to keep track of state
let isChanged = false;

// function to change text and color
function changeTextAndColor() {
    const title = document.getElementById("title");

    if (!isChanged) {
        title.textContent = "You clicked the button!";
        title.style.color = "blue";
        isChanged = true;
    } else {
        title.textContent = "Click the button to change me!";
        title.style.color = "black";
        isChanged = false;
    }
}

// event listener for button click
document.getElementById("changeBtn").addEventListener("click", changeTextAndColor);