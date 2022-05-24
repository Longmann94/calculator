
let currentNumArr =[];
let allNumArr = [];
let operatorArr = [];
let tempResultArr = [];

const resultArea = document.querySelector(".result-area");
const allButtons = document.querySelectorAll(".number-buttons");
const operatorButtons = document.querySelectorAll(".operator-buttons");
const equalButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".clear-button");

//clear all data in calculator
function clearCalculator() {
  currentNumArr.length = 0;
  allNumArr.length = 0;
  operatorArr.length = 0;
  tempResultArr.length = 0;
  resultArea.innerHTML = "";
}
//selecting numbers
function selectNumber(e) {

  if(tempResultArr.length > 0){
    allNumArr.push(tempResultArr.pop());
    currentNumArr.length = 0;
  }

  let number = e.srcElement.value;
  currentNumArr.push(number);
  if(Number(currentNumArr.join("")) > 0){
    //if number is greater than 0 display it
    resultArea.innerHTML = currentNumArr.join("");
  }
  else{
    //clear number array
    currentNumArr.length = 0;
  }

}

//funtion to run when a operator button is clicked
function selectOperator(e) {

  let operator = e.srcElement.value;

  if(currentNumArr.length == 0) return;

  allNumArr.push(Number(currentNumArr.join("")));
  currentNumArr.length = 0;

  calculate();

  operatorArr.pop();
  operatorArr.push(operator);
  }

//calculate numbers and operator selected
  function calculate(){
    if(allNumArr.length >= 2){
      if(operatorArr[0] == "+"){
        let result = add(allNumArr[allNumArr.length - 2], allNumArr[allNumArr.length - 1]);
        resultArea.innerHTML = result;
        allNumArr.length = 0;
        allNumArr.push(result);
        operatorArr.pop();
        return result;
      }else if(operatorArr[0] == "-"){
        let result = subtract(allNumArr[allNumArr.length - 2], allNumArr[allNumArr.length -1]);
        resultArea.innerHTML = result;
        allNumArr.length = 0;
        allNumArr.push(result);
        operatorArr.pop();
        return result;
      }else if(operatorArr[0] == "*"){
        let result = multiply(allNumArr[allNumArr.length - 2], allNumArr[allNumArr.length -1]);
        resultArea.innerHTML = result;
        allNumArr.length = 0;
        allNumArr.push(result);
        operatorArr.pop();
        return result;
      }else if(operatorArr[0] == "/"){
        let result = divide(allNumArr[allNumArr.length - 2], allNumArr[allNumArr.length -1]);
        resultArea.innerHTML = result;
        allNumArr.length = 0;
        allNumArr.push(result);
        operatorArr.pop();
        return result;
      }
    }

    currentNumArr.length = 0;
  }

//equal button
  function equalCalculate(){
    if(currentNumArr.length == 0) return;
    if(allNumArr.length == 0) return;
    allNumArr.push(Number(currentNumArr.join("")));

    let result = calculate();
    tempResultArr.push(result);
    currentNumArr.push(result);
  }

//round numbers to 3 decimal place
function rounded(num){
  return Math.round(num * 1000) / 1000;
}

//all the math functions
  function add(a,b){
    return rounded(Number(a + b));
  }

  function subtract(a,b){
    return rounded(Number(a - b));
  }

  function multiply(a,b){
    return rounded(Number(a * b));
  }

  function divide(a,b){
    return rounded(Number(a / b));
  }

allButtons.forEach(button => button.addEventListener("click", selectNumber));
operatorButtons.forEach(button => button.addEventListener("click", selectOperator));
equalButton.addEventListener("click", equalCalculate);
clearButton.addEventListener("click", clearCalculator);
