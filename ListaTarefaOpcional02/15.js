// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

var prompt = require('prompt-sync')();

let count = 1;
let numbers = []
let pairs = []

while (count <= 10) {
    let name = prompt(`Digite o ${count}º número: `)
    numbers.push(name)
    count++
}

function pares(array){
    for(let i = 0; i <= array.length; i++){
        if(array[i] % 2 === 0){
            pairs.push(array[i])
        }
    }

    console.log(`Numeros pares: ${pairs}`);
}

console.log(`Numeros: ${numbers}`);
pares(numbers)
