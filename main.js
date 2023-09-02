var score = 0;
function scoreAdd() {
  document.getElementById("left").innerHTML = ++score;
  
}

function scoreDec() {
  if (score>=0) {
    document.getElementById("left").innerHTML = score--;
  } 
}

function refresh(){
    document.getElementById("left").innerHTML=score=0;
}

let input = document.getElementById('clubNameNpt1');
let out = document.getElementById('clubNameId1');

input.onkeyup = function() {
  out.innerHTML = input.value;
}
let input1 = document.getElementById('clubNameNpt2');
let out1 = document.getElementById('clubNameId2');

input1.onkeyup = function() {
  out1.innerHTML = input1.value;
}

var score = 0;
function scoreAdd1() {
  document.getElementById("right").innerHTML = ++score;
  
}

function scoreDec1() {
    if (score>=0) {
        document.getElementById("right").innerHTML = score--;
      } 
}

function refresh1(){
    document.getElementById("right").innerHTML=score=0;
}