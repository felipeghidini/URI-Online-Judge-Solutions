/*Teste de Seleção 1
Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

Entrada
Quatro números inteiros A, B, C e D.

Saída
Mostre a respectiva mensagem após a validação dos valores.


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");
var A = parseInt(line[0]);
var B = parseInt(line[1]);
var C = parseInt(line[2]);
var D = parseInt(line[3]);

if ((B > C) && (D > A) && ((C+D) > (A+B)) && (C > 0) && (D > 0) && (A % 2 == 0)) console.log('Valores aceitos'); 
else console.log('Valores nao aceitos');
*/

const a = 2;
const b = 3;
const c = 2;
const d = 6;

if ((b > c) && (d > a) && ((c + d) > (a + b)) && (c > 0) && (d > 0) && (a % 2 == 0)) {
    console.log('Valores aceitos');
} else {
    console.log('Valores nao aceitos');
}