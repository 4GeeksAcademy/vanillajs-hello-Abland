import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = newExcusegen()
};

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function newExcusegen() {
  let excuse = 
    who[numGen(who.length)] + " " + 
    action[numGen(action.length)] + " " + 
    what[numGen(what.length)] + " " + 
    when[numGen(when.length)];

  return excuse;
}

function numGen(maxvar) {
  return Math.floor(Math.random() * maxvar); 
}
