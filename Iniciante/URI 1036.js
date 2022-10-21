/*Formula de Bhaskara
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");
var A = parseFloat(line[0]);
var B = parseFloat(line[1]);
var C = parseFloat(line[2]);

if ((A == 0) | (B * B - 4 * A * C < 0)) {
    console.log('Impossivel calcular');
    return;
}

var bhaskara = Math.sqrt((B * B) - 4 * A * C);
var R1 = (-B + bhaskara) / (2 * A);
var R2 = (-B - bhaskara) / (2 * A);
console.log('R1 = ' + R1.toFixed(5));
console.log('R2 = ' + R2.toFixed(5));
*/

const a = 10.0;
const b = 20.1;
const c = 5.1;

if ((a == 0) | (b * b - 4 * a * c < 0)) {
    console.log('Impossivel calcular');
    return;
}

const bhaskara = Math.sqrt((b * b) - 4 * a * c);
let R1 = (-b + bhaskara) / (2 * a);
let R2 = (-b - bhaskara) / (2 * a);
console.log('R1 = ' + R1.toFixed(5));
console.log('R2 = ' + R2.toFixed(5));