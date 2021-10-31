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
  console.log('Olá! Seja bem vinda '+ info.personagem);
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

function verificaPalindrome (word){
  for (index in word) {
    if(word[index] != word[(word.length - 1) - index]) {
      return false;
    }
  }
  return true;
}
function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  }else {
    return false;
  }
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome(('desenvolvimento')));

/* Item 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
*/

function maiorArray(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}
console.log(maiorArray([2, 3, 6, 7, 10, 1]));

/* Item 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. */

function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

/* Item 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. */

function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


/* Item 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete */

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

/* Item 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. */

function soman(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index += 1) {
    total = total + index;
  }
  return total;
}
console.log(soman(5));

/* Item 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .  */

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}

console.log(verificaFimPalavra('trybe', 'be'));