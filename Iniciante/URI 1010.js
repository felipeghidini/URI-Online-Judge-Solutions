/*Cálculo Simples
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines.shift().split(' ');
var cod1 = parseInt(line1[0]);
var n1 = parseInt(line1[1]);
var valor1 = parseFloat(line1[2]);

var line2 = lines.shift().split(' ');
var cod2 = parseInt(line2[0]);
var n2 = parseInt(line2[1]);
var valor2 = parseFloat(line2[2]);

var total = (n1 * valor1) + (n2 * valor2);
console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));
*/

const peca1 = 12;
const quantPecas1 = 1;
const valorPecas1 = 5.30;
const total1 = quantPecas1 * valorPecas1;

const peca2 = 16;
const quantPecas2 = 2;
const valorPecas2 = 5.10;
const total2 = quantPecas2 * valorPecas2;

const totalAPagar = total1 + total2;
console.log('VALOR A PAGAR: R$ ' + totalAPagar);
