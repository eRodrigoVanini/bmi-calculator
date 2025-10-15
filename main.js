//PARAR O ENVIO DO FORMULÁRIO
//CAPTURANDO O EVENTO DE SUBMIT DO FORMULÁRIO --------------------------------------------------------------------------
//COLOQUEI MEU FORMULÁRIO EM UMA VARIÁVEL-----------------------------------------------------------------------------------------
const form = document.querySelector('.form');



//ADICIONAREI UM EVENTO AO MEU FORMULÁRIO PARA PREVINIR SEU ENVIO--------------------------------------------------------------------
//O PRIMEIRO PARÂMETRO DENTRO DOS PARENTESES É O NOME DO EVENTO QUE DESEJO VER 
//O EVENTO SUBMIT É O DE SUBMETER ATRAVÉS DE BOTÃO (UM OUTRO SERIA O CLICK DO MOUSE POR EXEMPLO)
//O SEGUNDO PARÂMETRO NOS PARENTESES É UMA FUNÇÃO QUE SERÁ EXECUTADA QUE PODE ESTAR FORA OU DENTRO (ANONIMA) DOS PARENTESES DO PARAMETRO.
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Evento previnido.');   //linha só para confirmar que o evento foi realizado.


//PRIMEIRAMENTE CRIEI UMA VARIÁVEL PARA GUARDAR TODO O INPUT_PESO
//POSTERIORMENTE CRIEI UMA VARIÁVEL DIFERENTE PARA PEGAR SOMENTE O VALOR DESSA VARIÁVEL CRIADA PRIMEIRAMENTE
const inputPeso = document.querySelector('.peso');      
const inputAltura = document.querySelector('.altura');
const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);


//VERIFICANDO OS DADOS----------------------------------------------------------
if (!peso) {                        //se peso não for verdadeiro (se for NaN)
    setResultado('Digite um peso válido!', false)
    return;                         //se o peso não for verdadeiro, o código não passará daqui. pois nada se executa após o return
};    
if (!altura) {
    setResultado('Digite uma altura válida!', false)
    return;
};


//CRIANDO VARIÁVEL IMC QUE EXECUTARÁ FUNÇÃO GETIMC E EXIBINDO A VARIÁVEL IMC EM SEGUIDA
const imc = getImc(peso, altura);


//CRIANDO A VARIÁVEL NIVEL IMC PARA ARMAZENAR O INDICE CORRESPONDENTE DO ARRAY
const nivelImc = getNivelImc(imc);
const msg = `Seu IMC é ${imc} (${nivelImc}).`;

//SETANDO O RESULTADO
setResultado(msg, true);
});



//ABAIXO APRENDO QUE POSSO ALTERAR, INSERIR, CRIAR ELEMENTOS HTML A PARTIR DO JS
//COMO QUANDO EU CRIO O ELEMENTO <P> E AINDA ADICIONO UMA CLASSE PARA ELE, ATRAVÉS DO JS.
function criaP () {
    const p = document.createElement('p');  //criei um elemento html (uma tag) chamado p    
    return p;};




//CRIAREI UMA FUNÇÃO PARA ADICIONAR O RESULTADO À PAGINA----------------------------------------------------------------------------------------
//CRIEI UMA VARIAVEL RESULTADO INSERINDO NELA A CLASSE RESULTADO DA DIV ONDE EXIBIREI O RESULTADO
//O PARÂMETRO DENTRO DOS PARENTESES É UMA VARIÁVEL QUE SERVE À FUNÇÃO
//UMA FUNÇÃO É FEITA PARA SER EXECUTADA DEPOIS AO SEU CHAMAMENTO, DANDO-SE UM PARÂMETRO A ELA.
function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';   //ao executar essa função ele inserirá um vazio '' na div resultado do html      
    const p = criaP();


//MUDAR O FUNDO DA MENSAGEM EXIBIDA SEGUNDO O PARAMETRO isValid do SetResultado()
if (isValid) {p.classList.add('paragrafo-resultado');}
else {
    p.classList.add('bad')
}
    p.innerHTML = msg;
    resultado.appendChild(p);
};


//CRIAREI A FUNÇÃO PARA CALCULAR O imc
function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2);  
};


//CRIEI UM ARRAY PARA ABRIGAR OS RESULTADOS
//NÃO PRECISO COLOCAR ELSE NOS DEMAIS IFS PORQUE AS DEMAIS FUNÇÕES NÃO SERÃO EXECUTADAS CASO UMA FOR VERDADEIRA
//PARARÁ NO RETURN DA VERDADEIRA
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >=39.9) return nivel[5];            
    if (imc >=34.9) return nivel[4];
    if (imc >=29.9) return nivel[3];
    if (imc >=24.9) return nivel[2];
    if (imc >=18.5) return nivel[1];
    if (imc <18.5)  return nivel[0];
};