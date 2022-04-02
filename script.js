let button = document.querySelectorAll(button);
let screen = document.querySelector(".screen");

button.array.forEach((element) => {
  element.addEventListener("click", () => {
    screen.innerText += element.innerText;
  });
});
