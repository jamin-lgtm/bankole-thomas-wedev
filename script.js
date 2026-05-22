console.log("Website Loaded Successfully");

// Button Example
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button Clicked");
  });
});