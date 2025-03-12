const inicio = document.querySelector(".iniciador");
const player = document.querySelector("#play");

player.addEventListener("mouseenter", cambioColor);
player.addEventListener("mouseleave", cambioColor);

function cambioColor(){
inicio.classList.toggle("invert");
}