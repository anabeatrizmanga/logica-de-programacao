const inValor = document.getElementById("inValor");
const btVerifica = document.getElementById("btVerifica");
const outResultado = document.getElementById("outResultado");

var somaNumeros = 0;
var contNumeros = 0;
var menorNumero;// = Number.MAX_SAFE_INTEGER;
var maiorNumero;// = Number.MIN_SAFE_INTEGER;

btVerifica.addEventListener("click", verificarValor);
function verificarValor() {
    var valor = Number(inValor.value);

    if (inValor.value == "") {
        alert("O número não foi informado!");
        inValor.focus();
    } else {
        //Primeira parte: cálculo da média
        let media;
        contNumeros++;
        somaNumeros += valor;
        media = somaNumeros / contNumeros;

        if(contNumeros == 1){//(menorNumero == undefined){
            menorNumero = valor;
            maiorNumero = valor;
        } else{
            //Segunda parte: verificar o menor valor
            if (valor < menorNumero){
                menorNumero = valor;
            }

            //Terceira parte: verificar o maior valor
            if(valor > maiorNumero){
                maiorNumero = valor;
            }
        }
        outResultado.innerHTML = "Média: " + media.toFixed(2) +
                                "<br>Menor Número: " + menorNumero +
                                "<br>Maior Número: " + maiorNumero;
    }
}