
let currentNumArr =[];
let allNumArr = [];
let operatorArr = [];

const resultArea = document.querySelector(".result-area");

const allButtons = document.querySelectorAll(".number-buttons");
const operatorButtons = document.querySelectorAll(".operator-buttons");
const equalButton = document.querySelector(".equal-button");

function selectNumber(e) {

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

  function equalCalculate(){
    if(currentNumArr.length == 0) return;

    allNumArr.push(Number(currentNumArr.join("")));

    let result = calculate();
    currentNumArr.length = 0;
    currentNumArr.push(result);

    console.log(result);
    console.log(currentNumArr);
    console.log(allNumArr);
    console.log(operatorArr[0]);
  }

  function add(a,b){
    return Number(a + b);
  }

  function subtract(a,b){
    return Number(a - b);
  }

  function multiply(a,b){
    return Number(a * b);
  }

  function divide(a,b){
    return Number(a / b);
  }





allButtons.forEach(button => button.addEventListener("click", selectNumber));
operatorButtons.forEach(button => button.addEventListener("click", selectOperator));
equalButton.addEventListener("click", equalCalculate);
