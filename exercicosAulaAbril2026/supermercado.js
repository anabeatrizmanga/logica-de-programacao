const inProduto = document.getElementById("inProduto")
const inPreco = document.getElementById("inPreco")
const inQuantidade = document.getElementById("inQuantidade")
const btCalcularDesconto = document.getElementById("btCalcularDesconto")
const outDesconto = document.getElementById("outDesconto")
const outValorTotal = document.getElementById("outValorTotal")

var quantidadeDeProdutos = 0;

//até três unidades, não recebe desconto;
//acima três, até 5 unidades, recebe desconto de 5%;
//acima de 5 unidades, recebe 10% de desconto.

btCalcularDesconto.addEventListener("click", desconto)
function desconto() {
    let produto = Number(inProduto.value)
    let preco = Number(inPreco.value)
    let quantidade = Number(inQUantidade.value)

    // Verificação dos campos
    if (inProduto == "" || produto < 0) {
        alert("Campo de produtos está vazio ou valor < 0")
        inProduto.focus()
    } else if (inPreco == "" || preco < 0) {
        alert("Campo de preco está vazio ou valor < 0")
    } else if (inQuantidade == "" || quantidade < 0) {
        alert("Campo de preco está vazio ou valor < 0")
    }else {
        if 

    }


}