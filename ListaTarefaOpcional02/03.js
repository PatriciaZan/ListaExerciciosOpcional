// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

var prompt = require('prompt-sync')();

let distance = Number(prompt('Quantos kms deseja percorrer? : '))

function price(distance){
    if(distance <= 200){
        let result = distance * 0.50
        return `O valor para ${distance}km é de R$${result}`
    } else{
        let result = distance * 0.45
        return `O valor para ${distance}km é de R$${result}`
    }
}

console.log(price(distance));
