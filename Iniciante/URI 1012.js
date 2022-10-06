/*ÁREA
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(' ');
var a = parseFloat(line[0]);
var b = parseFloat(line[1]);
var c = parseFloat(line[2]);
var pi = 3.14159;

var triangulo = (a * c) / 2;
var circulo = pi * c * c;
var trapezio = ((a + b) * c) / 2;
var quadrado = Math.pow(b, 2.0);
var retangulo = a * b;

console.log('TRIANGULO: ' + triangulo.toFixed(3));
console.log('CIRCULO: ' + circulo.toFixed(3));
console.log('TRAPEZIO: ' + trapezio.toFixed(3));
console.log('QUADRADO: ' + quadrado.toFixed(3));
console.log('RETANGULO: ' + retangulo.toFixed(3));
*/

const a = 3;
const b = 4;
const c = 5.2;
const pi = 3.14159;

const triangulo = (a * c) / 2;
const circulo = pi * Math.pow(c, 2.0);
const trapezio = ((a + b) * c) / 2;
const quadrado = Math.pow(b, 2.0);
const retangulo = a * b;

console.log('TRIANGULO:' + triangulo);
console.log('CIRCULO:' + circulo);
console.log('TRAPEZIO:' + trapezio);
console.log('QUADRADO:' + quadrado);
console.log('RETANGULO:' + retangulo);