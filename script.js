const button = document.getElementById("calculate");

const num1 = document.getElementById("firstnum");

const num2 = document.getElementById("secondnum");

const sumNumbers = document.getElementById("sum");


button.addEventListener("click", addNumbers);

function addNumbers(){
  const firstNum  = Number(num1.value);
  const  secondNum = Number(num2.value);
  const total = (firstNum + secondNum);
  
  sumNumbers.innerText = total;
 
  
}