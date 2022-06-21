const voltar = document.getElementById("seta-voltar");
let avancar = document.getElementById("seta-avancar");
const listaProjetos = document.querySelectorAll(".projeto");

let numeroProjetos = listaProjetos.length;
let i = 0;

avancar.addEventListener("click", function () {

    if(i<numeroProjetos-1){
    voltar.classList.remove("opacidade");
    listaProjetos[i].classList.remove("mostrar");
    listaProjetos[i].classList.add("esconde");
    listaProjetos[i + 1].classList.remove("esconde");
    listaProjetos[i + 1].classList.add("mostrar");
    i++;
    }

    if (i === numeroProjetos - 1) { /* se ultimo elemento */
            avancar.classList.add("opacidade");
            return;
    }
});

voltar.addEventListener("click", function () {
    if (i > 0) {
        i--;
        avancar.classList.remove("opacidade");
        listaProjetos[i].classList.remove("esconde");
        listaProjetos[i].classList.add("mostrar");
        listaProjetos[i + 1].classList.remove("mostrar");
        listaProjetos[i + 1].classList.add("esconde");
        if (i === 0) { /* se primeiro elemento */
            voltar.classList.add("opacidade");
            return;
        }
    }
});


