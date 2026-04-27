const inValor1 = document.getElementById("inValor1")
const inValor2 = document.getElementById("inValor2")
const inValor3 = document.getElementById("inValor3")
const btResultado = document.getElementById("btResultado")
const outResultado = document.getElementById("outResultado")


btResultado.addEventListener("click", calcular)
function calcular() {
    let valor1 = Number(inValor1.value);
    let valor2 = Number(inValor2.value);
    let valor3 = Number(inValor3.value);

    //Verificação dos campos
    if (inValor1 == "" || valor1 < 0) {
        alert("Campo dos valores está vazio ou valor < 0")
        inValor1.focus()
    } else if (inValor2 == "" || valor2 < 0) {
        alert("Campo dos valores está vazio ou valor < 0")
        inValor2.focus()
    } else if (inValor3 == "" || valor3 < 0){
        alert("Campo dos valores está vazio ou valor < 0")
        inValor3.focus
    }if (valor1>valor2>valor3) {
        outResultado.innerHTML = "O valor é " + valor1
    }
    

}
