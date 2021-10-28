/* Exercicio 1
Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
n = 5

*****
*****
*****
*****
*****
*/

let n = 5;
let inputline = '';
let Symbol = '*';

for(let index = 0; index < n; index += 1) {
    inputline = inputline + Symbol;
};
for (let index = 0; index < n; index += 1) {
    console.log(inputline);
};

/* Exercício 2
Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5

*
**
***
****
*****
*/

let n = 5;
let asterisco = '*';
let formula = '';

for (let index = 0; index < n; index += 1) {
    console.log(formula);
    formula = formula + asterisco;
};

/* Exercicio 3
Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
*/

let n = '5';
let asterisco = '*';
let funcao = '';
let inputPosition = n;
for (let indexline = 0; indexline < n; indeline += 1) {
    for (let indexcol = 0; indexcol <= n; indexcol += 1) {
        if (indexcol < indexline) {
            funcao = funcao + '';
        }   else {
            funcao = funcao + asterisco;
        }
    }
    console.log(funcao);
    funcao = '';
    inputPosition -= 1;
};

/*Exercício 4 
Por fim, faça uma pirâmide com n asteriscos de base:
n = 5
  *
 ***
*****

*/

let n = 5;
let asterisco = '*';
let inputline = '';
let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
        if (columnIndex > controlLeft && columnIndex < controlRight) {
            inputline = inputLine + asterisco;
        }else {
            inputline = inputline + ' ';
        }
    }
}