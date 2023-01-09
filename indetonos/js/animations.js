"use strict";


//FUNCION ANIMACION//

let textosAnimados = document.querySelectorAll(".appear");
let buttonUp = document.querySelector(".buttonUp");
let buttonDown = document.querySelector(".buttonDown");
let count = 0;

if (count == 0) {
    buttonUp.classList.add("botonInvisible");
}


buttonUp.addEventListener("click", () => {
    let texto;
    if (count > 0) {
        count = count - 1;
        buttonDown.classList.remove("botonInvisible");
    }
    if (count == 0) {
        buttonUp.classList.add("botonInvisible");
    }

    textosAnimados.forEach(text => {
        text.classList.remove("animarScroll");
        text.classList.add("desanimarScroll");
    });

    switch (count) {
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

buttonDown.addEventListener("click", () => {
    let texto;

    if (count < 3) {
        count = count + 1;
        buttonUp.classList.remove("botonInvisible");
    }
    if (count == 3) {
        buttonDown.classList.add("botonInvisible");
    }

    textosAnimados.forEach(text => {
        text.classList.remove("animarScroll");
        text.classList.add("desanimarScroll");
    });

    switch (count) {
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
