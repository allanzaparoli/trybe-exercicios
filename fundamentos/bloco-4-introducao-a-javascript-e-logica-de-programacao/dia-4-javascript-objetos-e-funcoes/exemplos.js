let player ={
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: 'golden: 2, silver: 3',
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.age + ' anos.');

console.log('A jogadora ' +player.name + ' ' +player.lastName + ' foi eleita a melhor do mundo por 6 vezes ' + player.bestInTheWorld);

console.log('A jogadora possui 6 medalhas; ' +player.medals);

/*exemplo 1 de for/in
Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
*/
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};
for (let key in names) {
  console.log('Olá ' + names[key]);
}

/* Exemplo 2 
Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
*/
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let key in car) {
  console.log(key, car[key]);
}

/* Exemplo Função >> Carro
*/
var statusCarro = "desligado";
var aceleração = 0;
var rotacaoDoVolante = 0;

  function ligarDesligar() {
    if ( statusCarro === "desligado") {
      statusCarro = "ligado";
    } else {
      statusCarro = "desligado";
    }
    return statusCarro;
  }

  function acelerar(incremento) {
    aceleração = aceleração + incremento;
    return "Acelerando a " + aceleração + "m/s";
  }

  function frear(decremento) {
    aceleração = aceleração - decremento;
    return "Desacelerendo para " + aceleração + "m/s";
  }

  function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + "0"
  }