let answer;
let expression = [];
let calcAnswer;
var notNumber=false;
var zeroDec=false;

function numbers(math){
  if(zeroDec==true){
    let r=expression.split('')
    let q=answer.split('')
    r.pop();
    q.pop();
    expression=r.join('');
    answer=q.join('')
    zeroDec=false;
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
   if(math== '='){
    if (calcAnswer==Infinity){
      document.getElementById('answer').innerHTML="Error";
    }
    else if(finalExpression>999999999){
      let exponent=finalExpression.toString().length-1;
      document.getElementById('answer').innerHTML=calcAnswer/(10**(exponent))+'e'+exponent;
    }
  }
}
