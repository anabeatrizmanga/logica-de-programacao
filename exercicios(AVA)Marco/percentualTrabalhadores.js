const inValorJovens = document.getElementById("inValorJovens");
const inValorAdultos = document.getElementById("inValorAdultos");
const inValorIdosos = document.getElementById("inValorIdosos");
const btCalcular = document.getElementById("btCalcular");
const outPercentual = document.getElementById("outPercentual");

btCalcular.addEventListener("click", calcularPercentualTotal);
function calcularPercentualTotal() {

    var valorJovens = Number(inValorJovens.value);
    var valorAdultos = Number(inValorAdultos.value);
    var valorIdosos = Number(inValorIdosos.value);

    if (inValorJovens.value == "" || inValorJovens.value < 0) {
        alert("O campo de quantidade de jovens está incorreto, deixado vazio ou < 0.");
        inValorJovens.focus();
    } else if (inValorAdultos.value == "" || inValorAdultos.value < 0) {
        alert("O campo de quantidade de adultos está incorreto, deixado vazio ou < 0 .");
        inValorAdultos.focus();
    } else (inValorIdosos.value == "" || inValorIdosos.value < 0)
    alert("O campo de quantidade de idosos está incorreto, deixado vazio ou < 0.");
    inValorIdosos.focus();


    var total = valorJovens + valorAdultos + valorIdosos;

    var valorJovensPercentual = (valorJovens * 100) / total
    var valorAdultosPercentual = (valorAdultos * 100) / total
    var valorIdososPercentual = (valorIdosos) * 100 / total

    outPercentual.innerHTML =
        "Jovens: " + valorJovensPercentual.toFixed(2) + "%<br>" +
        "Adultos: " + valorAdultosPercentual.toFixed(2) + "%<br>" +
        "Idosos: " + valorIdososPercentual.toFixed(2) + "%";
}

btReiniciar.addEventListener("click", resetar);
function resetar() {
    inValorJovens.value = "";
    inValorAdultos.value = "";
    inValorIdosos.value = "";
    inValorJovens.focus()
}