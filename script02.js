//Captura form
const form = document.querySelector(".form");

//Parar envio form
form.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    console.log("Evento previnido.");
  },
  function calcular() {
    const bmi = calculateBMI(peso, altura);
    return bmi;
  }
);

const bmi = calcular;

//Capturar e transformar inputs
const resultado = document.querySelector(".resultado");
const inputPeso = document.querySelector(".peso");
const inputAltura = document.querySelector(".altura");
const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

//Calcular IMC
function calculateBMI(peso, altura) {
  const bmi = peso / (altura * altura);
  return bmi;
}

//Criar P
function criaP() {
  const p = document.createElement("p");
  return p;
}

//Variável abaixo armazena o retorno da função criaP()
const p = criaP();

p.innerHTML = bmi;
resultado.appendChild(p);
