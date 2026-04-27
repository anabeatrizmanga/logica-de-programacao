//criando referência para os elementos manipulados pela function
var inNome = document.getElementById("inNome");
var rbPar = document.getElementById("rbPar");
var rbImpar = document.getElementById("rbImpar");
var outNumero = document.getElementById("outNumero");
var outResultado = document.getElementById("outResultado");
var btJogar = document.getElementById("btJogar");

function jogarParImpar(){
    //obtendo o valor dos campos preenchidos do documento
    var nome = inNome.value;
    var par = rbPar.checked; //true se o radio button Par estiver marcado
    var impar = rbImpar.checked; //true se o radio button Ímpar estiver marcado
    
    //verificando se nome foi preenchido e Par/Impar selecionado
    if (nome != "" && (par != false || impar != false)){
         //gerando um valor entre menorValor e maiorValor
        const menorValor = 1; //menor valor do range a ser gerado aleatoriamente
        const maiorValor = 100; //maior valor do range a ser gerado aleatoriamente
        var numAleatorio = Math.floor(Math.random() * (maiorValor - menorValor + 1) + menorValor); 
    
        var resultado = (numAleatorio % 2 == 0) ? "Par" : "Ímpar";
        
        outNumeroGerado.textContent = "Número Gerado => " + numAleatorio;

        //verificando se o usuário acertou
        if ( (par && resultado == "Par") || (impar && resultado == "Ímpar") ) {
            outResultadoJogo.textContent = "Parabéns " + nome + " você ganhou!";
            outResultadoJogo.style.color = "green";
        } else {
            outResultadoJogo.textContent = "Ops " + nome + " você perdeu!";
            outResultadoJogo.style.color = "red";
        }
    } else { //se não foi informado o nome ou um dos radio buttons não foi selecionado
       alert ("Jogador, você precisa informar seu nome e selecionar Par ou Ímpar!");
    }
}
btJogar.addEventListener("click", jogarParImpar);