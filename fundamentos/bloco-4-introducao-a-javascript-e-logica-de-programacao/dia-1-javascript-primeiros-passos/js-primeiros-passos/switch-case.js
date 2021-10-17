
//exemplo1

let trafficLight = "vermelho";

switch (trafficLight) {
  case "vermelho":
    console.log("pare");
    break;

  case "amarelo":
    console.log("atenção");
    break;

  case "verde":
    console.log("siga");
    break;

    default:
      console.log("valor não identificado");
}

//exercicio 1

let candidato = "reprovado";

switch (candidato) {
  case "aprovado":
    console.log("Parabéns!, Você foi aprovado.");
    break;

  case ("lista"):
    console.log("Você está na lista de espera. Aguarde!");
    break;

  case ("reprovado"):
    console.log("Infelizmente você não atingiu a nota mínima. Não desista! Continue tentando!");
    break;

  default:
    console.log("Nada encontrado");
}


