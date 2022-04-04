let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let number = buttons[i].getAttribute("data-num");
    screen.value = screen.value + number;
  });
}

equal.addEventListener("click", function () {
  if (screen.value === "") {
    alert("Input form is empty");
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
});

clear.addEventListener("click", function () {
  screen.value = "";
});





/*function add(num1, num2) {
  return num1 + num2;
}
add(4, 6);
function subtract(num1, num2) {
  return num1 - num2;
}
subtract(4, 6);
function multiplay(num1, num2) {
  return num1 * num2;
}
multiplay(4, 6);
function divide(num1, num2) {
  return num1 / num2;
}
division(4, 6);
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
calculator(4, 6, division);*/