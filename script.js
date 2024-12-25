
const sobreEl = document.querySelector(".sobre") //botao sobrenos
const closeEl = document.querySelector(".close"); //fechar aba
const close2El = document.querySelector(".close-2"); //fechar aba
const contatoEl = document.querySelector(".contato"); //botao contato
const sobrenosEl = document.querySelector(".Sobre-nos-modal");
const contatosMoldalEl = document.querySelector(".contato-modal");


if(contatoEl === true){
    sobreEl.remove("hide")
}


contatoEl.addEventListener("click", () => {
    contatosMoldalEl.classList.toggle("hide");       
});

sobreEl.addEventListener("click", () => {    
    sobrenosEl.classList.toggle("hide");
});

closeEl.addEventListener("click", () => {
    sobrenosEl.classList.toggle("hide");
});

close2El.addEventListener("click", () => {
    contatosMoldalEl.classList.toggle("hide");
});




