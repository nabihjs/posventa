const sonidos = [
  { 
    audioUrl: 'STEMS/breakbeats/01beat.mp3',
    figura: 'img1',
  },
  { 
    audioUrl: 'STEMS/breakbeats/02beat.mp3',
    figura: 'img2',
  },
  { 
    audioUrl: 'STEMS/breakbeats/03beat.mp3',
    figura: 'img3',
  },
  { 
    audioUrl: 'STEMS/breakbeats/04beat.mp3',
    figura: 'img4',
  },
  { 
    audioUrl: 'STEMS/breakbeats/05beat.mp3',
    figura: 'img5',
  }
]

const sonidos2 = [
  { 
    audioUrl: 'STEMS/chordrones/01chordron.mp3',
    figura: 'dron1',
  },
  { 
    audioUrl: 'STEMS/chordrones/02chordron.mp3',
    figura: 'dron2',
  },
  { 
    audioUrl: 'STEMS/chordrones/03chordron.mp3',
    figura: 'dron3',
  },
  { 
    audioUrl: 'STEMS/chordrones/04chrodron.mp3',
    figura: 'dron4',
  },
  { 
    audioUrl: 'STEMS/chordrones/05chordron.mp3',
    figura: 'dron5',
  },
  { 
    audioUrl: 'STEMS/chordrones/06chordron.mp3',
    figura: 'dron6',
  },
  { 
    audioUrl: 'STEMS/chordrones/07chordron.mp3',
    figura: 'dron7',
  },
  { 
    audioUrl: 'STEMS/chordrones/08chordron.mp3',
    figura: 'dron8',
  },
  { 
    audioUrl: 'STEMS/chordrones/09chordron.mp3',
    figura: 'dron9',
  }
]
const sonidos3 = [
  {
    audioUrl: 'STEMS/rec/01rec.mp3',
    figura: 'ambi1',
  },
  {
    audioUrl: 'STEMS/rec/02rec.mp3',
    figura: 'ambi2',
  },
  {
    audioUrl: 'STEMS/rec/03rec.mp3',
    figura: 'ambi3',
  },
  {
    audioUrl: 'STEMS/rec/04rec.mp3',
    figura: 'ambi4',
  },
  {
    audioUrl: 'STEMS/rec/05rec.mp3',
    figura: 'ambi5',
  },
  {
    audioUrl: 'STEMS/rec/06rec.mp3',
    figura: 'ambi6',
  }
]
const sonidos4 = [
  {
    audioUrl: 'STEMS/voces/01voz.mp3',
    figura: 'voc1',
  },
  {
    audioUrl: 'STEMS/voces/02voz.mp3',
    figura: 'voc2',
  },
  {
    audioUrl: 'STEMS/voces/03voz.mp3',
    figura: 'voc3',
  },
  {
    audioUrl: 'STEMS/voces/04voz.mp3',
    figura: 'voc4',
  },
  {
    audioUrl: 'STEMS/voces/05voz.mp3',
    figura: 'voc5',
  },
  {
    audioUrl: 'STEMS/voces/06voz.mp3',
    figura: 'voc6',
  },
  {
    audioUrl: 'STEMS/voces/07voz.mp3',
    figura: 'voc7',
  },
  {
    audioUrl: 'STEMS/voces/08voz.mp3',
    figura: 'voc8',
  },
  {
    audioUrl: 'STEMS/voces/09voz.mp3',
    figura: 'voc9',
  },
  {
    audioUrl: 'STEMS/voces/10voz.mp3',
    figura: 'voc10',
  }
]

const contenedor = document.querySelector(".contenedor");
const boton = document.querySelector("#boton");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#bot3");
const boton4 = document.querySelector("#bot4");
const sonido = document.createElement("audio");
const audio2 = document.createElement("audio");
const audio3 = document.createElement("audio");
const audio4 = document.createElement("audio");


boton.addEventListener("click", mute1);
boton.addEventListener('keydown', manejarTecla);
boton3.addEventListener("click", mute3);
boton3.addEventListener('keydown', manejarTecla);
document.addEventListener('keydown', manejarTecla);

function manejarTecla(event) {
  if (event.keyCode === 65 || event.key === 'a') {
    cambioState1(); 
  } else if (event.keyCode === 83 || event.key === 's') {
    cambioState2();
  } else if (event.keyCode === 68 || event.key === 'd') {
    cambioState3();
  } else if (event.keyCode === 70 || event.key === 'f') {
    cambioState4();
  } else if (event.keyCode === 32 || event.key === 'Space') {
    event.preventDefault();
    silencio();
  }
}

function cambioState1() {
  contenedor.classList.toggle("claro");
  const indice = Math.floor(Math.random()*sonidos.length); //redondeamos para abajo con math.floor; con math random tenemos valores de 0 a 1 (con coma) entonces lo multiplicamos por sonidos.length que es toda la cantidad de objetos que hay en el array Sonidos.
  const sonidoElegido = sonidos[indice];
  boton.className = sonidoElegido.figura;
  sonido.src = sonidoElegido.audioUrl;
  sonido.play();
}

boton2.addEventListener("click", mute2);
boton2.addEventListener('keydown', manejarTecla);
boton4.addEventListener("click", mute4);
boton4.addEventListener("keydown", manejarTecla);

function cambioState2() {
  contenedor.classList.toggle("claro");
  const indice2 = Math.floor(Math.random()*sonidos2.length);
  const sonidoElegido2 = sonidos2[indice2];
  boton2.className = sonidoElegido2.figura;
  audio2.src = sonidoElegido2.audioUrl;
  audio2.play();
}

function cambioState3() {
  contenedor.classList.toggle("claro");
  const indice3 = Math.floor(Math.random()*sonidos3.length);
  const sonidoElegido3 = sonidos3[indice3];
  boton3.className = sonidoElegido3.figura;
  audio3.src = sonidoElegido3.audioUrl;
  audio3.play();
}

function cambioState4() {
  contenedor.classList.toggle("claro");
  const indice4 = Math.floor(Math.random()*sonidos4.length);
  const sonidoElegido4 = sonidos4[indice4];
  boton4.className = sonidoElegido4.figura;
  audio4.src = sonidoElegido4.audioUrl;
  audio4.play();
}

 function silencio () {
  sonido.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
 }

 function mute1 () {
  sonido.pause();
 }
 function mute2 () {
  audio2.pause();
 }
 function mute3 () {
  audio3.pause();
 }
 function mute4 () {
  audio4.pause();
 }