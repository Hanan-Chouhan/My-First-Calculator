let display = document.getElementById("display");

let btn1 = document.getElementById("btn-1");
btn1.addEventListener("click", function () {
  display.value += "1";
});

let btn2 = document.getElementById("btn-2");
btn2.addEventListener("click", function () {
  display.value += "2";
});

let btn3 = document.getElementById("btn-3");
btn3.addEventListener("click", function () {
  display.value += "3";
});

let btn4 = document.getElementById("btn-4");
btn4.addEventListener("click", function () {
  display.value += "4";
});

let btn5 = document.getElementById("btn-5");
btn5.addEventListener("click", function () {
  display.value += "5";
});

let btn6 = document.getElementById("btn-6");
btn6.addEventListener("click", function () {
  display.value += "6";
});

let btn7 = document.getElementById("btn-7");
btn7.addEventListener("click", function () {
  display.value += "7";
});

let btn8 = document.getElementById("btn-8");
btn8.addEventListener("click", function () {
  display.value += "8";
});

let btn9 = document.getElementById("btn-9");
btn9.addEventListener("click", function () {
  display.value += "9";
});

let btn0 = document.getElementById("btn-0");
btn0.addEventListener("click", function () {
  display.value += "0";
});

let clear = document.getElementById("AC");
clear.addEventListener("click", function () {
  display.value = "";
});

let del = document.getElementById("Del");
del.addEventListener("click", function () {
  display.value = display.value.slice(0, -1);
});

let dot = document.getElementById("btn-dot");
dot.addEventListener("click", function () {
  let value = display.value;

  let lastNum = value.split(/[-+*/]/).pop();
  if (!lastNum.includes(".")) {
    display.value += ".";
  }
});

let evl = document.getElementById("equal");
evl.addEventListener("click", function () {
  let expression = display.value.replace(/(\d+)%/g, "($1/100)");
  display.value = eval(expression);
});

let minus = document.getElementById("minus");
minus.addEventListener("click", function () {
  display.value += "-";
});

let plus = document.getElementById("plus");
plus.addEventListener("click", function () {
  display.value += "+";
});

let divide = document.getElementById("divide");
divide.addEventListener("click", function () {
  display.value += "/";
});

let multiply = document.getElementById("multiply");
multiply.addEventListener("click", function () {
  display.value += "*";
});

let percentage = document.getElementById("percentage");
percentage.addEventListener("click", function () {
  display.value += "%";
});
