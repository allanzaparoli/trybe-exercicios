
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* exercicio-1
Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
 */
for (let numero of numbers) {
  console.log(numero);
}

/* Exercicio-2
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
*/
  var soma = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
  }
  console.log('resultado da soma: ' + soma);

  /* Exercicio-3
  Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
  */
 
  var media = soma/numbers.length;
 
  console.log(media);

  /* Exercício-4
  Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
  */

  if (media > 20) {
    console.log("Valor maior que 20");
  }else {
    console.log("Valor menor ou igual a 20");
  }

  /* Exercício-5
  Utilizando for , descubra qual o maior valor contido no array e imprima-o;
   */

  var maior = numbers[0];
  for (var index = 0; index < numbers.length; index += 1) {
    if (maior < numbers[index]) {
    }
    maior = numbers[index];
  }
  console.log("O maior número é: " + maior);

/* Exercicio 6
 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/
for (let index = 0; index < numbers.length; index += 1) {
  let nimp = 0;
  if (numbers[index] % 2 !== 0) {
    nimp += 1;
  }
}    
  if (result === 0) {
    console.log('Nenhum valor ímpar encontrado');
  } else {
   console.log(nimp);
  }

/* Exercício-7
Utilizando for , descubra qual o menor valor contido no array e imprima-o;
*/
var menor = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < menor) { 
    menor = numbers[i];
  }
console.log(menor);
}

/* Exercício-8 
Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
*/

let numbers = [];
for (let i = 1; i <= 25; i += 1) {
  numbers.push(index);
}
console.log(numbers);

/* Exercicio-9
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/
for (let i = 0; i < n.length; i =+ 1) {
  console.log(n[index]/2);
}
