const inTimeA = document.getElementById("inTimeA");
const inTimeB = document.getElementById("inTimeB");
const btResultado = document.getElementById("btResultado");
const outValorDoJogo = document.getElementById("outValorDoJogo");
const btLimpar = document.getElementById("btLimpar");

btResultado.addEventListener("click", Resultado)
function Resultado() {

    //Verificação dos campos
    var golsA = Number(inTimeA.value);
    var golsB = Number(inTimeB.value);

    if (inTimeA.value == "" || golsA < 0) {
        alert("Campo do time A está vazio ou incorreto; valor < 0");
        inTimeA.focus();
    } else if (inTimeB.value == "" || golsB < 0) {
        alert("Campo do time B está vazio ou incorreto; valor < 0");
        inTimeB.focus();
    }
    //empate
    if (golsA == golsB) {
        outValorDoJogo.innerHTML = "Empate entre time A e B " + golsA + " x " + golsB;
    }

    //vitória do time A
    else if (golsA > golsB) {

        var diferenca = golsA - golsB;

        if (diferenca > 2) {
            outValorDoJogo.innerHTML = "Time A venceu " + golsA + " x " + golsB + " foi goleada";
        } else {
            outValorDoJogo.innerHTML = "Time A venceu " + golsA + " x " + golsB;
        }

    }

    //vitória do time B
    else {
        var diferenca = golsB - golsA;

        if (diferenca > 2) {
            outValorDoJogo.innerHTML = "Time B venceu " + golsB + " x " + golsA + " foi goleada";
        } else {
            outValorDoJogo.innerHTML = "Time B venceu " + golsB + " x " + golsA;
        }

    }
}

btLimpar.addEventListener("click", Limpar)

function Limpar() {
    inTimeA.value = "";
    inTimeB.value = "";
    inTimeA.focus()
    outValorDoJogo.innerHTML = "";
}
