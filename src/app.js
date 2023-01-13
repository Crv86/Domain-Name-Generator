/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ['the','our', 'my'];
  var adj = ['great', 'big', 'small' ];
  var noun = ['jogger','racoon'];

  let textHTML = '<ul class="list-group">';

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k=0; k < noun.length; k++) {
        console.log(i, j, k)
        const element1 = pronoun[i];
        const element2 = adj[j];
        const element3 = noun[k];
let domainName = element1 + element2 + element3;
        textHTML += '<li class="list-group-item">' + domainName + '</li>';
      }
    }
  }

  // 1. Generar todas las combinaciones de los tres arreglos
  // n. Mostrar una lista con todas las combinaciones en html

  textHTML += '</ul>';
  
  let element = document.querySelector('#domain')
  element.innerHTML = textHTML

};
