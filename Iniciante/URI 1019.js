/* Conversão de Tempo
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var duracaoSegundos = parseInt(lines.shift());

var horas = Math.floor(duracaoSegundos / 3600);
duracaoSegundos -= horas * 3600;
var minutos = Math.floor(duracaoSegundos / 60);
duracaoSegundos -= minutos * 60;
var segundos = duracaoSegundos;

console.log(horas + ':' + minutos + ':' + segundos);
*/

let duracaosegundos = 556;
const horas = Math.floor(duracaosegundos / 3600);
duracaosegundos -= horas * 3600;
const minutos = Math.floor(duracaosegundos / 60);
duracaosegundos -= minutos * 60;
const segundos = duracaosegundos;

console.log(horas + ':' + minutos + ':' + segundos);