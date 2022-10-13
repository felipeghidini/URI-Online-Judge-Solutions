/*Cédulas
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var notasI = parseInt(lines.shift())

var atual = notasI

var notas100 = Math.floor(atual / 100)
atual -= notas100 * 100

var notas50 = Math.floor(atual / 50)
atual -= notas50 * 50

var notas20 = Math.floor(atual / 20)
atual -= notas20 * 20

var notas10 = Math.floor(atual / 10)
atual -= notas10 * 10

var notas5 = Math.floor(atual / 5)
atual -= notas5 * 5

var notas2 = Math.floor(atual / 2)
atual -= notas2 * 2

var notas1 = atual

console.log(notasI)
console.log(notas100 +" nota(s) de R$ 100,00")
console.log(notas50 +" nota(s) de R$ 50,00")
console.log(notas20 +" nota(s) de R$ 20,00")
console.log(notas10 +" nota(s) de R$ 10,00")
console.log(notas5 +" nota(s) de R$ 5,00")
console.log(notas2 +" nota(s) de R$ 2,00")
console.log(notas1 +" nota(s) de R$ 1,00")
*/

const valorEntrada = 576;
let valorAtual = valorEntrada;

const notas100 = Math.floor(valorAtual / 100);
valorAtual -= notas100 * 100;

const notas50 = Math.floor(valorAtual / 50);
valorAtual -= notas50 * 50;

const notas20 = Math.floor(valorAtual / 20);
valorAtual -= notas20 * 20;

const notas10 = Math.floor(valorAtual / 10);
valorAtual -= notas10 * 10;

const notas5 = Math.floor(valorAtual / 5);
valorAtual -= notas5 * 5;

const notas2 = Math.floor(valorAtual / 2);
valorAtual -= notas2 * 2;

const notas1 = valorAtual

console.log(valorEntrada)
console.log(notas100 +" nota(s) de R$ 100,00")
console.log(notas50 +" nota(s) de R$ 50,00")
console.log(notas20 +" nota(s) de R$ 20,00")
console.log(notas10 +" nota(s) de R$ 10,00")
console.log(notas5 +" nota(s) de R$ 5,00")
console.log(notas2 +" nota(s) de R$ 2,00")
console.log(notas1 +" nota(s) de R$ 1,00")