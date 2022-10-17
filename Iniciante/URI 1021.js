/*Notas e moedas
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a]= input.split()
var valor = parseFloat(a)
let cedula = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let aux = 0
console.log("NOTAS:")
for (let i = 0; i < 6; i++) {
    aux = parseInt(valor / cedula[i])
    console.log(`${aux} nota(s) de R$ ${cedula[i].toFixed(2)}`)
    valor = valor % cedula[i]
}
console.log("MOEDAS:")
for (let j = 6; j < cedula.length; j++) {
    aux = parseInt(valor / cedula[j])
    console.log(`${aux} moeda(s) de R$ ${cedula[j].toFixed(2)}`)
    valor = valor % cedula[j] + 0.00001
}
*/

let valor = 576.73;

const notas100 = Math.floor(valor / 100);
valor -= notas100 * 100;
const notas50 = Math.floor(valor / 50);
valor -= notas50 * 50;
const notas20 = Math.floor(valor / 20);
valor -= notas20 * 20;
const notas10 = Math.floor(valor / 10);
valor -= notas10 * 10;
const notas5 = Math.floor(valor / 5);
valor -= notas5 * 5;
const notas2 = Math.floor(valor / 2);
valor -= notas2 * 2;
const moedas1 = Math.floor(valor / 1);
valor -= moedas1 * 1;
const moedas50 = Math.floor(valor / 0.50);
valor -= moedas50 * 0.50;
const moedas25 = Math.floor(valor / 0.25);
valor -= moedas25 * 0.25;
const moedas10 = Math.floor(valor / 0.10);
valor -= moedas10 * 0.10;
const moedas5 = Math.floor(valor / 0.05);
valor -= moedas5 * 0.05;
const moedas01 = Math.floor(valor);

console.log('NOTAS:');
console.log(notas100 + ' nota(s) de R$ 100.00');
console.log(notas50 + ' nota(s) de R$ 50.00');
console.log(notas20 + ' nota(s) de R$ 20.00');
console.log(notas10 + ' nota(s) de R$ 10.00');
console.log(notas5 + ' nota(s) de R$ 5.00');
console.log(notas2 + ' nota(s) de R$ 2.00');
console.log('MOEDAS:');
console.log(moedas1 + ' moeda(s) de R$ 1.00');
console.log(moedas50 + ' moeda(s) de R$ 0.50');
console.log(moedas25 + ' moeda(s) de R$ 0.25');
console.log(moedas10 + ' moeda(s) de R$ 0.10');
console.log(moedas5 + ' moeda(s) de R$ 0.05');
console.log(moedas01 + ' moeda(s) de R$ 0.01');


