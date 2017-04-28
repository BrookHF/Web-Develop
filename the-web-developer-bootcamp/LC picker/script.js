var leftNum;
var rightNum;
var result;
var generateButtom = document.querySelector("#generate-button");
var questionNumber = document.querySelector("#result");

generateButtom.addEventListener("click", function(){
  inputs = document.querySelectorAll("input");
  leftNum = inputs[0].valueAsNumber;
  rightNum = inputs[1].valueAsNumber;
  if(inputs[0]=="" || inputs[1]==""){
    alert("Need numbers in two form");
    return;
  }
  if(leftNum<0 || rightNum<0){
    alert("Need to be positive numbers");
    return;
  }
  var range = rightNum - leftNum;
  result = Math.floor(Math.random() * (rightNum - leftNum + 1)) + leftNum;
  questionNumber.textContent = result;
});
