const inDistancia = document.getElementById("inDistancia");
const inTempo = document.getElementById("inTempo");
const btRegistrar = document.getElementById("btRegistrar");
const btRelatorio = document.getElementById("btRelatorio");

// Saidas 
const outRegistro = document.getElementById("outRegistro");
const outRelatorio = document.getElementById("outRelatorio");

// Variáveis globais (contadoras)
var totalDistancia = 0;
var totalTrechos = 0;
var trechosMaisDuash = 0;
var trechosVelAlta = 0;

btRegistrar.addEventListener("click", registrarTrecho);
btRelatorio.addEventListener("click", relatorioEnduro);

// Função Registrar Trecho
function registrarTrecho() {

    var distancia = Number(inDistancia.value);
    var tempo = Number(inTempo.value);

    // verificação dos campos
    if (inDistancia.value == "") {
        alert("Campo de distância está vazio, por favor preencha-o.");
        inDistancia.focus();
    }
    else if (distancia <= 0) {
        alert("Informe uma distância válida, (maior que 0)");
        inDistancia.focus();
    }
    else if (inTempo.value == "") {
        alert("Campo de tempo está vazio, por favor preencha-o.");
        inTempo.focus();
    }
    else if (tempo <= 0) {
        alert("Informe um tempo válido, (maior que zero)");
        inTempo.focus();
    }
    else {


        // Cálculo velocidade média 
        var velocidade = distancia / tempo;

        // Soma das distancias acumuladas nas var globais para serem calculadas dps
        totalDistancia += distancia;
        totalTrechos++;

        if (tempo > 2) {
            trechosMaisDuash++;
        }

        else if (velocidade > 100) {
            trechosVelAlta++;
        }

        // Saída
        outRegistro.innerHTML = "Velocidade média do trecho: " + velocidade.toFixed(2) + " km/h";
    }
}

// Função Relatório
function relatorioEnduro() {

    // var acumuladora, já esta com zero nela
    if (totalTrechos == 0) {
        alert("Nenhum trecho registrado.");
    }

    var mediaDistancia = totalDistancia / totalTrechos;

    outRelatorio.innerHTML =
        "Distância total: " + totalDistancia.toFixed(2) + " km<br>" +
        "Trechos que demoraram mais de 2h: " + trechosMaisDuash + "<br>" +
        "Quantidade de trechos com velocidade média superior à 100 km/h: " + trechosVelAlta + "<br>" +
        "Média das distâncias: " + mediaDistancia.toFixed(2) + " km";
}
