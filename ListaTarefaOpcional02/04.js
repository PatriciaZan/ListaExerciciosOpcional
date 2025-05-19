// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

var prompt = require('prompt-sync')();

let reta1 = Number(prompt('Qual o comprimento da Primeira reta? : '));
let reta2 = Number(prompt('Qual o comprimento da Segunda reta? : '));
let reta3 = Number(prompt('Qual o comprimento da Terceira reta? : '));

function check(reta1, reta2, reta3){
    if(reta1 + reta2 > reta3 || reta2 + reta3 > reta1 || reta1 + reta3 > reta2){
        return `É possivél formar um triângulo!`
    } else {
        return `Não é possivél formar um triângulo!`
    }
}

console.log(check(reta1, reta2, reta3));
