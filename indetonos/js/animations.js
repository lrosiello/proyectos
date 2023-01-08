"use strict";

//FUNCION ANIMACION//

let textosAnimados = document.querySelectorAll(".appear");
let buttonUp = document.querySelector(".buttonUp");
let buttonDown = document.querySelector(".buttonDown");
let count = 0;

buttonUp.addEventListener("click", ()=>{
  let texto;
  if(count>0){
    count = count -1;
  }
  
  textosAnimados.forEach(text => {
    text.classList.remove("animarScroll");
    text.classList.add("desanimarScroll");
  });

  switch(count){
    case 0:
      texto = textosAnimados[0];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
    case 1:
      texto = textosAnimados[1];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
    case 2:
      texto = textosAnimados[2];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
          case 3:
      texto = textosAnimados[3];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
  }
})

buttonDown.addEventListener("click", ()=>{
  let texto;

  if(count<3){
    count = count +1;
  }

  textosAnimados.forEach(text => {
    text.classList.remove("animarScroll");
    text.classList.add("desanimarScroll");
  });

  switch(count){
    case 0:
      texto = textosAnimados[0];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
    case 1:
      texto = textosAnimados[1];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
    case 2:
      texto = textosAnimados[2];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
          case 3:
      texto = textosAnimados[3];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
  }
})
