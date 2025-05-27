// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

var prompt = require('prompt-sync')();

let count = 1
let names = []

while (count <= 7) {
    let name = prompt(`Digite o ${count}º nome: `)
    names.push(name)
    count++
}

console.log('Original: ' + names);
console.log('Inverso: ' + names.reverse());



