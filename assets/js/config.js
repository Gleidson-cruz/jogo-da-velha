let jogador,vencedor = null;
let jogadorSelecionado = document.getElementById("jogador_selecionado");
let vencedorSelecionado = document.getElementById("vencedor_selecionado");
let quadrados = document.getElementsByClassName("quadrado");

const clickQuadrado = document.getElementsByClassName("quadrado");

for (let i = 0; i < clickQuadrado.length; i++) {
  clickQuadrado[i].addEventListener("click", function (event) {
    escolherQuadrado(event.target.id);
  });
}

mudarJogador("X");

function escolherQuadrado(i) {
  let quadrado = document.getElementById(i);

  if (vencedor) {
  }

  if (quadrado.innerHTML !== "-") {
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = "#000";

  if (jogador === "X") {
    jogador = "O";
  } else {
    jogador = "X";
  }

  mudarJogador(jogador);
  checkvencedor();
}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function checkvencedor() {
  let quadrado1 = document.getElementById(1);
  let quadrado2 = document.getElementById(2);
  let quadrado3 = document.getElementById(3);
  let quadrado4 = document.getElementById(4);
  let quadrado5 = document.getElementById(5);
  let quadrado6 = document.getElementById(6);
  let quadrado7 = document.getElementById(7);
  let quadrado8 = document.getElementById(8);
  let quadrado9 = document.getElementById(9);

  if (sequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCor(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;
  }
  if (sequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCor(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;
  }
  if (sequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCor(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;
  }
  if (sequencia(quadrado1, quadrado4, quadrado7)) {
    mudarCor(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    return;
  }
  if (sequencia(quadrado2, quadrado5, quadrado8)) {
    mudarCor(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;
  }
  if (sequencia(quadrado3, quadrado6, quadrado9)) {
    mudarCor(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;
  }
  if (sequencia(quadrado1, quadrado5, quadrado9)) {
    mudarCor(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;
  }
  if (sequencia(quadrado3, quadrado5, quadrado7)) {
    mudarCor(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
    return;
  }
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

function mudarCor(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = "#0f0";
  quadrado2.style.background = "#0f0";
  quadrado3.style.background = "#0f0";
}

function sequencia(quadrado1, quadrado2, quadrado3) {
  let eigual = false;
  if (
    quadrado1.innerHTML !== "-" &&
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    eigual = true;
  }
  return eigual;
}

function btn_reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = "";

  for (let i = 1; i <= 9; i++) {
    let quadrado = document.getElementById(i);
    quadrado.style.background = "#e1e1e1";
    quadrado.style.color = "#e1e1e1";
    quadrado.innerHTML = "-";
    jogador = "X";
  }
}

const reiniciar = document.querySelector(".reiniciar");
reiniciar.addEventListener("click", btn_reiniciar);
