const inValorUnitario = document.getElementById("inValorUnitario");
const inQuantidaDeProduto = document.getElementById("inQuantidaDeProduto");
const btRegistrar = document.getElementById("btRegistrar");
const btReiniciar = document.getElementById("btReiniciar");
const outValorTotal = document.getElementById("outValorTotal");

var total = 0;  // Variavel acumuladora: escopo global para somar os valores de cada produto

// Função para 1º ler os preços, dps ir na variavel global "total" e somar o valor calculado com oq ja estava

btRegistrar.addEventListener("click", registrarProduto);
function registrarProduto(){
    var preco = Number(inValorUnitario.value);
    var quantidade = Number(inQuantidaDeProduto.value);

    total += preco * quantidade; // total = total (preco * quantidade);
    outValorTotal.innerHTML = "Total: R$" + total.toFixed(2);
    inValorUnitario.focus();
}

btReiniciar.addEventListener("click", reiniciar);
function reiniciar(){
    total = 0;
    inValorUnitario.value = "";
    inValorUnitario.focus(); // Colocar o cursor no campo inValorUnitario
    inQuantidaDeProduto.value = "";
    outValorTotal.innerHTML = "Total: R$ 0,00";
    
}