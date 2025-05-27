// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

var prompt = require('prompt-sync')();

let count = 1

let names = []
let ages = []

while(count <= 9){
    let name = prompt(`Digite o nome da ${count}º pessoa: `)
    let age = Number(prompt(`Digite a idade da ${count}º pessoa: `))
    console.log('- - - - -');

    names.push(name)
    ages.push(age)

    count++
}

console.log(names);
console.log(ages);

function underAge(name, age){
    for(let i = 0; i <= age.length; i++){
        if(age[i] < 18){
            //console.log('Menor de idade');
            //console.log(`${age[i]}`);
            //console.log(`Nome ${name[i]}`);
            console.log(`${name[i]} com ${age[i]} anos é menor de idade.`);
        }
    }
}

underAge(names, ages)
