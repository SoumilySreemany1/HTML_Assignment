const addBtn = document.querySelector(".add-btn");
const subtractBtn = document.querySelector(".subtract-btn");
const multiplyBtn = document.querySelector(".multiply-btn");
const divideBtn = document.querySelector(".divide-btn");

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");


const result = document.querySelector(".text");

let num1 = 0, num2 = 0;

function changeInput1() {
    num1 = parseFloat(input1.value);
}

function changeInput2() {
    num2 = parseFloat(input2.value);
}

function add() {
    result.value = num1 + num2;
}

function subtract() {
    result.value = num1 - num2;
}

function multiply() {
    result.value = num1 * num2;
}

function divide() {
       result.value = num1 / num2;
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

input1.addEventListener("input", changeInput1);
input2.addEventListener("input", changeInput2);
























