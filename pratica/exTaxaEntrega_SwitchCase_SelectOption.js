var sltBairro = document.getElementById("sltBairro");
var outTaxaEntrega = document.getElementById("outTaxaEntrega");


sltBairro.addEventListener("change", calcularEntrega);

function calcularEntrega() {
   var bairro = sltBairro.value;
   var taxaEntrega;

   switch (bairro) {
      case "CENTRO":
         taxaEntrega = 5.00;
         break;

      case "VILA NOVA":
      case "ALVORADA":
         taxaEntrega = 6.00;
         break;

      case "DOIS PINHEIROS":
         taxaEntrega = 7.00;
         break;

      case "JARDIM DA MONTANHA":
         taxaEntrega = 8.00;
         break;

      case "":
         taxaEntrega = -1; //usando o valor -1 como um flag de bairro inválido
   }

   if (taxaEntrega == -1) {
      alert ("Bairro não encontrado!");
      sltBairro.focus();
      outTaxaEntrega.innerHTML = "";
   } else {
      outTaxaEntrega.innerHTML = "Taxa de Entrega: R$" + taxaEntrega.toFixed(2);
   }
}