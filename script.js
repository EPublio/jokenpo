var pedrapc = new Image();
pedrapc.src = 'pedrapc.jpg';
var papelpc = new Image();
papelpc.src = 'papelpc.jpg';
var tesourapc = new Image();
tesourapc.src = 'tesourapc.jpg';
var pensandopc = new Image();
pensandopc.src = 'pensando.jpg';


let sortear = () => {
  let n = Math.ceil(Math.random() * 3);
  if (n == 1) {
    jogadaPc.replaceChildren(pedrapc);
  }
  else if (n == 2) {
    jogadaPc.replaceChildren(papelpc);
  }
  else if (n == 3) {
    jogadaPc.replaceChildren(tesourapc);
  }
  return n;

};
const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");
const resultado = document.getElementById("resultado");

const jogadaUser = document.getElementById("jogadauser");
const jogadaPc = document.getElementById("jogadapc");




function jogar(u) {
  let pc = sortear();
  if (u == 1 && pc == 2) {
    resultado.innerHTML = "Você perdeu.";
  }
  else if (u == 2 && pc == 3) {
    resultado.innerHTML = "Você perdeu.";
  }
  else if (u == 3 && pc == 1) {
    resultado.innerHTML = "Você perdeu.";
  }
  else if (u == pc) {
    resultado.innerHTML = "Empate.";
  }
  else {
    resultado.innerHTML = "Você ganhou.";
  }
}


pedra.addEventListener("click", function() {
  pedra.classList.add("escolhido");
  papel.classList.remove("escolhido");
  tesoura.classList.remove("escolhido");
  jogadaUser.replaceChildren(pedra.cloneNode());
  resultado.innerHTML = "Pensando...";
  jogadaPc.replaceChildren(pensandopc);
  setTimeout(function() {
  jogar(1);
  }, 1000);
});
papel.addEventListener("click", function() {
  papel.classList.add("escolhido");
  tesoura.classList.remove("escolhido");
  pedra.classList.remove("escolhido");
  jogadaUser.replaceChildren(papel.cloneNode());
  resultado.innerHTML = "Pensando...";
  jogadaPc.replaceChildren(pensandopc);
  setTimeout(function() {
  jogar(2);
  }, 1000);
});
tesoura.addEventListener("click", function() {
  tesoura.classList.add("escolhido")
  papel.classList.remove("escolhido");
  pedra.classList.remove("escolhido");
  jogadaUser.replaceChildren(tesoura.cloneNode());
  resultado.innerHTML = "Pensando...";
  jogadaPc.replaceChildren(pensandopc);
  setTimeout(function() {
  jogar(3);
  }, 1000);
});