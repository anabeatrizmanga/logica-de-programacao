const inNome = document.getElementById("inNome");
const rbPar = document.getElementById("rbPar");
const rbImpar = document.getElementById("rbImpar");
const outNumero = document.getElementById("outNumero");
const outResultado = document.getElementById("outResultado");
const btJogar = document.getElementById("btJogar");

var pontos = 0;
var vitoriaSeguidas = 0;
var derrotasSeguidas = 0;


btJogar.addEventListener("click", jogarParImpar);
function jogarParImpar(){
    //obtendo o valor dos campos preenchidos do documento
    var nome = inNome.value;
    var par = rbPar.checked; //true se o radio button Par estiver marcado
    var impar = rbImpar.checked; //true se o radio button Ímpar estiver marcado
    
    //verificando se nome foi preenchido e Par/Impar selecionado
    if (nome == ""){
        alert("Campo Nome do Jogador não foi preenchido!");
        inNome.focus();
    } else if (par == false && impar == false){
        alert("Não foi selecionada a opçao Par ou Ímpar!");
        rbPar.checked = true;
    } else {
         //gerando um valor entre menorValor e maiorValor
        const menorValor = 1; //menor valor do range a ser gerado aleatoriamente
        const maiorValor = 100; //maior valor do range a ser gerado aleatoriamente
        var numAleatorio = Math.floor(Math.random() * (maiorValor - menorValor + 1) + menorValor); 
    
        var resultado = (numAleatorio % 2 == 0) ? "Par" : "Ímpar";
        
        outNumeroGerado.innerHTML = "Número Gerado => " + numAleatorio;

        //verificando se o usuário acertou
        if ( (par && resultado == "Par") || (impar && resultado == "Ímpar") ) {
            outResultadoJogo.innerHTML = "Parabéns " + nome + " você ganhou!";
            outResultadoJogo.style.color = "green";
        } else {
            outResultadoJogo.innerHTML = "Ops " + nome + " você perdeu!";
            outResultadoJogo.style.color = "red";
        }
    }
}