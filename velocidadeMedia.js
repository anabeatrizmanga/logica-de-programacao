const inDistancia = document.getElementById("inDistancia")
const inTempo = document.getElementById("inTempo")
const outRelatorio = document.getElementById("outRelatorio")
const btRegistrarTrecho = document.getElementById("btRegistrarTrecho")

//VARIAVEIS GLOBAIS
var tempoTotal = 0 //tempo total da viagem
var distanciaTotal = 0 // distancia total

var baixa = 0 //velo baixa
var media = 0// "" media
var alta = 0//"" alta

var menorVelocidade = null //vazia pq vamos ter q comparar com alguma para caso
//  seja maior ser substituida

btRegistrarTrecho.addEventListener("click", RegistrarTrecho)
function RegistrarTrecho () {
    //OBTENÇÃO DE DADOS
     var distancia =  Number (inDistancia.value);
     var tempo = Number (inTempo.value);

     //VALIDAÇÕES
     if (inDistancia.value == "" || distancia < 0){
        alert("Campo da distância está vazio ou com valor < 0>")
        inDistancia.focus();
     }
     else if (inTempo.value == "" || tempo < 0){
        alert("Campo de tempo está vazio ou com valor < 0")
        inTempo.focus();
     }
     else {
        //CALCULO VELOCIDADE 
            var velocidade = distancia / tempo;
        
         //CLASSIFICAÇÃO
         if (velocidade < 60) {
            baixa++;;
         } 
         else if (velocidade >= 60 && velocidade <= 80){
            media++;
         } 
         else {
            alta++;
         } 
         if (menorVelocidade == null || velocidade < menorVelocidade){
            menorVelocidade = velocidade;
         }
         //ACUMULADORES
          tempoTotal += tempo;
          distanciaTotal += distancia;

          var velocidadeMedia = distanciaTotal / tempoTotal;

          //SAIDA
          outRelatorio.innerHTML = 
            "Distância total percorrida: " + distanciaTotal.toFixed(1) + " km<br>" +
            "Trechos em Baixa Velocidade: " + baixa + "<br>" +
            "Trechos em Velocidade Regular: " + media + "<br>" +
            "Trechos em Alta Velocidade: " + alta + "<br>" +
            "Menor velocidade registrada: " + menorVelocidade.toFixed(1) + " km/h<br>" +
            "Velocidade média da viagem: " + velocidadeMedia.toFixed(1) + " km/h";
     }
}
