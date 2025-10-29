/*const indices = {
  1: "Abaixo do peso",
  2: "Peso Normal",
  3: "Sobrepeso",
  4: "Obesidade grau 1",
  5: "Obesidade grau 2",
  6: "Obesidade grau 3",
};*/

//Captura form
const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Evento previnido."); //linha só para confirmar que o evento foi realizado
  //Capturar inputs
  const inputPeso = document.querySelector(".peso");
  const inputAltura = document.querySelector(".altura");
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  //VERIFICANDO OS DADOS----------------------------------------------------------
  if (!peso) {
    //se peso não for verdadeiro (se for NaN)
    setResultado("Digite um peso válido!", false);
    return; //se o peso não for verdadeiro, o código não passará daqui. pois nada se executa após o return
  }
  if (!altura) {
    setResultado("Digite uma altura válida!", false);
    return;
  }

  //CRIANDO VARIÁVEL IMC QUE EXECUTARÁ FUNÇÃO GETIMC E EXIBINDO A VARIÁVEL IMC EM SEGUIDA
  const imc = getImc(peso, altura);

  //CRIANDO A VARIÁVEL NIVEL IMC PARA ARMAZENAR O INDICE CORRESPONDENTE DO ARRAY
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  //SETANDO O RESULTADO
  setResultado(msg, true);
});


//Cria elemento P
function criaP() {
  const p = document.createElement("p");
  return p;
}


function setResultado(msg, isValid) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = ""; //ao executar essa função ele inserirá um vazio '' na div resultado do html
  const p = criaP();

  //MUDAR O FUNDO DA MENSAGEM EXIBIDA SEGUNDO O PARAMETRO isValid do SetResultado()
  if (isValid || isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}

//Calcular o IMC
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

//Fixar Texto Nível
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}
