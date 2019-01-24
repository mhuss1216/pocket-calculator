let answer;
let expression = [];
let calcAnswer;

if(num === '*' || num === '/' || num === '+'|| num === '-'){
  console.log(negated)
  if(expressionArray[expressionArray.length - 1] == '+' || expressionArray[expressionArray.length - 1] == '-' || expressionArray[expressionArray.length -1 == '*'] || expressionArray[expressionArray.length - 1] == '/'){
    expressionArray.pop();
    expressionArray.push(num);
    opInserted = true;
    console.log("raw array" , expressionArray);
  }

    if(Number(document.answer.display.value.length) <= 10){
    document.answer.display.value = document.answer.display.value
  }else{
    document.getElementById("zero").disabled = true;
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
    document.getElementById("decimal").disabled = true;
    document.getElementById("pi").disabled = true;
  }
  
   if(decimalNumInsert == false){
 let commaInput = Number(document.answer.display.value.split(",").join("")).toLocaleString();
 document.answer.display.value = commaInput;
  }
  
function pi(){
  document.getElementById("answer").textContent += Math.PI;
  expression.push(Math.PI);
}

function zero(){
  document.getElementById("answer").textContent += "0";
  expression.push("0");
}


function one(){
  document.getElementById("answer").textContent += "1";
  expression.push("1");
}

function two(){
  document.getElementById("answer").textContent += "2";
  expression.push("2");
}

function three(){
  document.getElementById("answer").textContent += "3";
  expression.push("3");

}

function four(){
  document.getElementById("answer").textContent += "4";
  expression.push("4");
}

function five(){
  document.getElementById("answer").textContent += "5";
  expression.push("5");
}

function six(){
  document.getElementById("answer").textContent += "6";
  expression.push("6");
}

function seven(){
  document.getElementById("answer").textContent += "7";
  expression.push("7");
}

function eight(){
  document.getElementById("answer").textContent += "8";
  expression.push("8");
}

function nine(){
  document.getElementById("answer").textContent += "9";
  expression.push("9");
}

function allclear(){
  document.getElementById("answer").innerHTML = " ";
  calcAnswer = "";
  expression = [];
}

function decimal(){
  document.getElementById("answer").textContent += ".";
  expression.push(".");
}

function negate(){
  answer = document.getElementById("answer").innerHTML;
  answer = eval(answer);
  answer *=-1;
  document.getElementById("answer").innerHTML = answer;
  expression.push("-");
}

function multiply(){
  document.getElementById("answer").textContent += " * ";
  expression.push("*");
}

function divide(){
  document.getElementById("answer").textContent += " / ";
  expression.push("/");
}

function add(){
  document.getElementById("answer").textContent += " + ";
  expression.push("+");
}

function subtract(){
  document.getElementById("answer").textContent += " - ";
  expression.push("-");
}

function percent(){
  document.getElementById("answer");
  expression.push("/", "1", "0", "0");
  equal();
}


function equal(){
calcAnswer = eval(expression.join(''))
document.getElementById("answer").innerHTML = calcAnswer;
}
