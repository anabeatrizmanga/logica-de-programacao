const inValorTotalJanta = document.getElementById("inValorTotalJanta");
const btCalcular = document.getElementById("btCalcular");
const outJanta = document.getElementById("outJanta");

btCalcular.addEventListener("click", calcularJanta);
function calcularJanta() {

    var valorJanta = Number(inValorTotalJanta.value);
    var taxaGarcom = (valorJanta * 0.10);
    var totalJanta = Number(valorJanta + taxaGarcom);

    outJanta.innerHTML = "Taxa garçom R$ " + taxaGarcom.toFixed(2) + 
        "<br>Valor a ser pago " + totalJanta.toFixed(2) 

}