const inProduto = document.getElementById("inProduto")
const inPreco = document.getElementById("inPreco")
const inQUantidade = document.getElementById("inQUantidade")
const btCalcularDesconto = document.getElementById("btCalcularDesconto")
const outDesconto = document.getElementById("outDesconto")
const outValorTotal = document.getElementById("outValorTotal")

//até três unidades, não recebe desconto;
//acima três, até 5 unidades, recebe desconto de 5%;
//acima de 5 unidades, recebe 10% de desconto.

btCalcularDesconto.addEventListener("click", desconto)
function desconto(){
    

}