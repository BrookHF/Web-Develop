var leftNum = 0;
var rightNum = 0;
var result = 0;
var leftDisplay = document.querySelector("#left-number");
var rightDisplay = document.querySelector("#right-number");
var leftButtom = document.querySelector("#left-button");
var rightButtom = document.querySelector("#right-button");
var generateButtom = document.querySelector("#generate-button");
var questionNumber = document.querySelector("h1");

leftDisplay.addEventListener("click", function(){
  leftNum = document.getElementsByTagName("input")[0].valueAsNumber;
  leftDisplay.innerText=leftNum;
});
