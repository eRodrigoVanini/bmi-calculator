// Capturando o formulário
const form = document.querySelector(".form");

// Prevenir envio do formulário e processar dados
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Capturando valores dos inputs
  const inputPeso = document.querySelector(".peso");
  const inputAltura = document.querySelector(".altura");
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Validando dados
  if (!peso || peso <= 0) {
    setResultado("Por favor, digite um peso válido!", false);
    return;
  }

  if (!altura || altura <= 0) {
    setResultado("Por favor, digite uma altura válida!", false);
    return;
  }

  // Calculando e exibindo resultado
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  // Verificar se está fora do peso normal (abaixo ou acima)
  const isPesoNormal = imc >= 18.5 && imc < 25;
  setResultado(msg, isPesoNormal);
});

// Criar elemento de parágrafo
function criaP() {
  const p = document.createElement("p");
  return p;
}

// Exibir resultado na página
function setResultado(msg, isValid) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

// Calcular IMC
function getImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

// Determinar classificação do IMC
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 40) return nivel[5];
  if (imc >= 35) return nivel[4];
  if (imc >= 30) return nivel[3];
  if (imc >= 25) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  return nivel[0];
}
