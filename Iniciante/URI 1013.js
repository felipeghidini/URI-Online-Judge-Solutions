/*O Maior
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");
var a = parseInt(line[0]);
var b = parseInt(line[1]);
var c = parseInt(line[2]);

if (a > b && a > c) {
    console.log(a + ' eh o maior');
} else if (b > c) {
    console.log(b + ' eh o maior');
} else {
    console.log(c + ' eh o maior');
}
*/

const a = 7;
const b = 14;
const c = 106;

if (a > b && a > c) {
    console.log(a + ' eh o maior');
} else if (b > c ) {
    console.log(b + ' eh o maior');
} else {
    console.log(c + ' eh o maior');
}    
