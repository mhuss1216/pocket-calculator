function pi(){
  document.getElementById("answer").textContent +=Math.PI;
}

function zero(){
  document.getElementById("answer").textContent +="0";
}

function one(){
  document.getElementById("answer").textContent +="1";
}

function two(){
  document.getElementById("answer").textContent +="2";
}

function three(){
  document.getElementById("answer").textContent +="3";
}

function four(){
  document.getElementById("answer").textContent +="4";
}

function five(){
  document.getElementById("answer").textContent +="5";
}

function six(){
  document.getElementById("answer").textContent +="6";
}

function seven(){
  document.getElementById("answer").textContent +="7";
}

function eight(){
  document.getElementById("answer").textContent +="8";
}

function nine(){
  document.getElementById("answer").textContent += "9";
}

function allclear(){
  document.getElementById("answer").innerHTML = "";
}

function decimal(){
  document.getElementById("answer").textContent += ".";
}

function negate(){
  answer = document.getElementById("answer").innerHTML;
  answer = eval(answer);
  answer *=-1;
  document.getElementById("answer").innerHTML = answer;
}
