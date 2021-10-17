const a = 10;
const b = 5;

/*exercicio 1
  Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:*/

//Adição (a + b)

console.log(a + b);

//Subtração (a - b)

console.log(a - b);

//Multiplicação (a * b)

console.log(a * b);

//Divisão (a / b)

console.log(a / b);

//Módulo (a % b)

console.log(a % b);

//-------------------------

/*Exercicio 2

Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/

const numero1 = 1;
const numero2 = 5;
const numero3 = 1;

if(numero1 > numero2){
  console.log(numero1);
}else {
  console.log(numero2);
}

/*Exercicio 3
  Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
 */

  if(numero1 > numero2 && numero1 > numero3){
    console.log(numero1 + ' é o maior dos 3 números.');
  }else if(numero2 > numero3){
    console.log(numero2 + ' é o maior dos 3 números.');  
  }else{
    console.log(numero3 + ' é o maior dos 3 números.');
  }

  /* Exercicio 4
  Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

  const c = 5;
  if(c > 0) {
    console.log("Positive");
  }else if ( c < 0){
    console.log("Negative");
  }else {
    console.log("Zero");
  }

  /* Exercicio 5
  Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
  * Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
  * Um ângulo será considerado inválido se não tiver um valor positivo. */

const tri1 = 60;
const tri2 = 60;
const tri3 = -60;

if(tri1 > 0 && tri2 > 0 && tri3 > 0 && tri1 + tri2 + tri3 == 180){
  console.log("True");
}else{
  console.log("False")
}

/* Exercicio 6
 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.*/

let xadrez = "Torre";
let capitalized = xadrez[0].toUpperCase () + xadrez.substr(1);

switch (xadrez) {
  case "peao":
    console.log("Peões são incomuns porque eles se movem e capturam de formas diferentes. Eles andam para frente, mas só capturam na diagonal. Peões só podem se mover uma casa por vez, exceto em seus primeiros movimentos, quando podem andar por duas casas. Os peões só podem capturar nas casas diagonais em frente a eles. Nunca podem capturar para trás. Se houver uma peça imediatamente em frente ao peão, ele não pode se mover ou capturar aquela peça.");
    break;

  case "torre":
    console.log("A torre movimenta-se quantas casas queira na horizontal ou vertical,porém em apenas um sentido por jogada.");
    break;

  case "cavalo":
      console.log("Os cavalos se movem de forma diferente das outras peças andando duas casas em uma direção e então se movendo mais uma casa em um ângulo de 90 graus, ou no formato da letra L. Cavalos são as únicas peças que podem se mover sobre outras peças.");
      break;
      
  case "bispo":
      console.log("O bispo tem seu movimento mais restrito, sendo possível apenas pelas diagonais em um sentido por ogada. Cada bispo começa na casa de uma cor (clara ou escura) e deve sempre permanecer nesta cor.");
      break;

  case "rainha":
      console.log ("A rainha é a peça mais poderosa, podendo movimentar-se em qualquer direção em um único sentido na jogada e em quantas casas quiser. E, assim como todas as outras peças, se a rainha captura a peça do oponente o movimento termina.");
      break;

  case "dama":
      console.log ("A dama é a peça mais poderosa, podendo movimentar-se em qualquer direção em um único sentido na jogada e em quantas casas quiser. E, assim omo todas as outras peças, se a dama captura a peça do oponente o movimento termina.");
      break;
        
  case "rei":
      console.log("O rei é a peça de maior valor no jogo, pois se esta é capturada a partida chega ao fim; ele pode mover-se em todas as direções, porém em apenas uma casa por vez. Ele pode capturar qualquer peça do adversário, com exceção do Rei. Quando o rei está sendo ameaçado  por outra peça, isso é conhecido como xeque. O rei nunca pode se colocar em xeque (posição onde pode ser capturado).");
      break;

  default:
      console.log("Essa peça não existe no Xadrez");
}

/* Exercicio 7
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let porcentagem =10;

if (porcentagem >= 9) {
  console.log("A");
}else if (porcentagem >= 8) {
  console.log("B");
}else if (porcentagem >= 7) {
  console.log("C");
}else if (porcentagem >= 6) {
  console.log("D");
}else if (porcentagem >= 5) {
  console.log("E");
}else {
  console.log("F")
}

/* Exercicio 8
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

const num1 =4;
const num2 =3;
const num3 =8;

if (num1 %2 == 0 || num2 %2 == 0 || num3 %2 == 0) {
  console.log("True");
}else {
  console.log("False");
}

/* Exercicio 9
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

if (num1 %2 == 1 || num2 %2 == 1 || num3 %2 == 1) {
  console.log("True");
}else {
  console.log("False");
}

/* Exercicio 10
 Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
  *Atente que, sobre o custo do produto, incide um imposto de 20%.
  *Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada   seja menor que zero.
  *O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    **valorCustoTotal = valorCusto + impostoSobreOCusto
    **lucro = valorVenda - valorCustoTotal (lucro de um produto)
  */

const vcusto = 5;
const vvenda = -10;

if(vvenda < 0 || vcusto < 0){
  console.log("O valor está negativo. Favor arrumar!");
}else{
  console.log(vvenda - [vcusto + (vcusto *0.2)]);
}

/* Exercicio 11
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

var salario =1800;

  if(salario <= 1556.94){
    console.log('Salário líquido é de: '+ [salario - (salario * 0.08)]);
  }else if (salario <= 2594.92) {
    console.log('Salário líquido é de: '+ [salario - [(0.075) * (salario - (salario * 0.09))]]);
  }
  else {
    console.log("Salário está errado.");
  }

  1638







