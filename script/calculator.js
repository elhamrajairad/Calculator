let display = document.querySelector(".main__body__screen__bumbers__result");
let buttons = document.querySelector(".main__body__buttons");
let numbers = document.querySelectorAll(".black-btn");
let clearDisplay = document.querySelector("#clear");
let absult = document.querySelector("#absult");
let remainder = document.querySelector("#remainder");
let divider = document.querySelector("#divider");
let power = document.querySelector("#power");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let equal = document.querySelector("#equal");
let backspace = document.querySelector("#backspace");

let memory = 0;
let lastOparation = "";
clearDisplay.addEventListener("click", function () {
  display.textContent = 0;
  memory = 0;
  lastOparation = "";
});

buttons.addEventListener("click", inputNumber);
function inputNumber(event) {
  if (display.textContent.length > 15) {
    return;
  }
  let data = event.target.dataset.input;
  if (data) {
    if (data === ".") {
      if (!display.textContent.includes(".")) {
        display.textContent += data;
      }
    } else {
      display.textContent += data;
      if (!display.textContent.includes(".")) {
        display.textContent = Number(display.textContent);
      }
    }
  }
  if (display.textContent.length > 9) {
    display.classList.add("font-m");
  }
}

// absult.addEventListener("click", () => {
//   lastOparation = "+/-";
//   if (Number(display.textContent > 0)) {
//     memory = Number(-display.textContent);
//   }
//   display.textContent = 0;
//   console.log(memory);
// });
remainder.addEventListener("click", function (e) {
  lastOparation = "remainder";
  memory = Number(display.textContent);
  display.textContent = 0;
});
divider.addEventListener("click", function (e) {
  lastOparation = "divider";
  memory = Number(display.textContent);
  display.textContent = 0;
});
power.addEventListener("click", function (e) {
  lastOparation = "power";
  memory = Number(display.textContent);
  display.textContent = 0;
});
minus.addEventListener("click", function (e) {
  lastOparation = "minus";
  memory = Number(display.textContent);
  display.textContent = 0;
});
plus.addEventListener("click", function (e) {
  lastOparation = "plus";
  memory = Number(display.textContent);
  display.textContent = 0;
});

equal.addEventListener("click", function () {
  if (lastOparation !== "") {
    let number = Number(display.textContent);
    if (lastOparation === "remainder") {
      display.textContent = memory % number;
    } else if (lastOparation === "divider") {
      display.textContent = memory / number;
    } else if (lastOparation === "power") {
      display.textContent = memory * number;
    } else if (lastOparation === "minus") {
      display.textContent = memory - number;
    } else if ((lastOparation = "plus")) {
      display.textContent = memory + number;
    }
    lastOparation = "";
  }
});

backspace.addEventListener("click", () => {
  if (display.textContent.length === 1) {
    display.textContent = 0;
  } else {
    display.textContent = display.textContent.substring(
      0,
      display.textContent.length - 1
    );
  }
});
