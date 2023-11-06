let addbtn = document.querySelector(".Add");

addbtn.addEventListener("click", function () {
  let first = document.querySelector("#firstNumber").value;
  let second = document.querySelector("#secondNumber").value;

  let res = parseInt(first) + parseInt(second);
  result.value = res;
});

let subbtn = document.querySelector("#Sub");
subbtn.addEventListener("click", function () {
  let first = document.querySelector("#firstNumber").value;
  let second = document.querySelector("#secondNumber").value;

  let res = parseInt(first) - parseInt(second);
  result.value = res;
});

let mul = document.querySelector("#Multiply");
mul.addEventListener("click", function () {
  let first = document.querySelector("#firstNumber").value;
  let second = document.querySelector("#secondNumber").value;

  let res = parseInt(first) * parseInt(second);
  result.value = res;
});

let divide = document.querySelector("#Divide");
divide.addEventListener("click", function () {
  let first = document.querySelector("#firstNumber").value;
  let second = document.querySelector("#secondNumber").value;

  let res = parseFloat(first) / parseFloat(second);
  result.value = res;
});

let Clear = document.querySelector("#Clear");
Clear.addEventListener("click", function () {
  result.value = "";
  firstNumber.value = "";
  secondNumber.value = "";
});

let Clearres = document.querySelector("#clearResult");
clearResult.addEventListener("click", function () {
  result.value = "";
});
