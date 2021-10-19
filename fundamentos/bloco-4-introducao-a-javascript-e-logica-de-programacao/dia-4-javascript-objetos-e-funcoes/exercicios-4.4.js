let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

/* Exercicio-1
Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
 */
for (let key in info) {
  console.log('Olá! Seja bem vinda ' + info.personagem);
}
/* exercicio-2
Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
*/
for (let key in info) {
  console.log(info);
}

/* Exercicio 3
Faça um for/in que mostre todas as chaves do objeto.
 */

for (let key in info) {
  console.log(key);
}

/*Exercício 4
Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
*/

for (let key in info) {
  console.log(info[key]);
}

/* Exercício 5
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
*/
let desenho = {
  personagem: 'Margarida e Tio Patinhas',
  origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
  recorrente: 'Ambos recorrentes'
};
for (let key in desenho) {
  console.log(desenho[key]);
}

/* Exercicio 1 - Sobre Função 
Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
*/
let a = a;
let b = r;
let c = a;
let d = r;
let e = a;

function polindromo (a = c && b == d) {
  
  return true;
}