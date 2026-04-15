const inEixoX = document.getElementById("inEixoX")
const inEixoY = document.getElementById("inEixoY")
const btVerQuadrante = document.getElementById("btVerQuadrante")

//verificar se foram informados pelo usuário os valores de x e y, emitindo mensagem de alert se algum dos campos estiver vazio;
// se os campos estiverem preenchidos, a aplicação deve identificar e informar ao usuário em
//qual dos quadrantes do plano cartesiano se encontra aquele ponto,a partir dos valores de x e y;
//se x ou y tiverem valor zero, a aplicação informará que o ponto se encontra sobre um dos eixos.

btVerQuadrante.addEventListener("click", verQuadrante)
function verQuadrante(){
    let x = Number(inEixoX.value);
    let y = Number(inEixoY.value);

    // Verificação dos campos
    if(inEixoX.value == "") {

    }
        
    
     
}