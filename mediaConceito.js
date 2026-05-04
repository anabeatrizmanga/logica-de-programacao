const inNotaParcial1 = document.getElementById("inNotaParcial1");
const inNotaParcial2 = document.getElementById("inNotaParcial2");
const inFaltas = document.getElementById("inFaltas");
const btVerificar = document.getElementById("btVerificar");

const outSaida1 = document.getElementById("outSaida1");
const outSaida2 = document.getElementById("outSaida2");
const outSaida3 = document.getElementById("outSaida3");

var totalAlunos = 0
var aprovados = 0

btVerificar.addEventListener("click", verificarSituacao)
function verificarSituacao() {
    //OBBTENÇÃO DOS VALORES
    var nota1 = Number(inNotaParcial1.value);
    var nota2 = Number(inNotaParcial2.value);
    var faltas = Number(inFaltas.value);           

    //VERIFICAÇÃO DOS CAMPOS
    if (inNotaParcial1.value == "" || nota1 < 0 || nota1 > 100) {
        alert("Campo da primeira nota está vazio ou valores = 0 < 100.");
        inNotaParcial1.focus();
    }
    else if (inNotaParcial2.value == "" || nota2 < 0 || nota2 > 100) {
        alert("Campo da segunda está vazio ou valores = 0 < 100.");
        inNotaParcial2.focus();
    }
    else if (inFaltas.value == "" || faltas < 0 || faltas > 120) {
        alert("Campo das faltas está vazio ou valores = 0 < 120.");
        inFaltas.focus();
    }
    else {
       
        totalAlunos++;

        //CÁLCULOS
        var media = nota1 + nota2 / 2;
        var percentualFaltas = (faltas / 120) * 100;
        
        var conceito;
        if (media < 60){
            conceito = "Insuficiente"
        }
        else if (media <= 80){
            conceito = "Regular";
        } 
        else {
            conceito = "Bom";
        }

        //SITUAÇÃO FINAL
        var situação;

        if(percentualFaltas > 25){
            situação = "Reprovado por falta";
        }
        else if (conceito == "Insuficiente"){
            situação = "Reprovado por nota";
        }
        else {
            situação = "Aprovado";
            aprovados++;
        }

        //SAIDAS
        outSaida1.innerHTML = "Percentual de faltas " + percentualFaltas.toFixed(2) +
                                "% | Conceito " + conceito;
         
        outSaida2.innerHTML = "Situação: " + situação;

        var percAprovados = (aprovados / totalAlunos) * 100
        outSaida3.innerHTML = "Total de alunos " + totalAlunos +
                              "<br>Percentual de aprovados: " + percAprovados.toFixed(2) + "%"

    }


}