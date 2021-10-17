
//Exemplo1
const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

//Exemplo 2
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

//Exercicio 1

const currentHour = 8;

let message = " ";

if (currentHour >= 22) {
  console.log(message = "Não deveríamos comer nada, é hora de dormir");
}
else if (currentHour >= 18) {
  console.log(message = "Rango da noite, vamos jantar!!!");
}
else if (currentHour >= 14) {
    console.log(message = "Vamos fazer um bolo pro café da tarde");
  }
else if (currentHour >= 11) {
  console.log(message = "Hora do almoço!!!");
}
else {
  console.log(message = "Hmmmm, cheiro de café recém passado");
}

//exemplo 3

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

//exercicio 2

var weekDay = "Segunda";

if (weekDay == "Sábado") {
console.log("Finalmente, descanso merecido UwU");
}
else if (weekDay == "Domingo") {
  console.log("Finalmente, descanso merecido UwU");
}
else {
  console.log("Oba, mais um dia de aprendizado na Trybe");
}

// exercicio 3

