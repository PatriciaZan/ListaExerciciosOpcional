// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Kmh
// exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

var prompt = require('prompt-sync')();

let speed = Number(prompt('Qual a velocidade do carro? : '))

function multa(speed){
    if(speed <= 80){
        console.log(`Não foi multado! velocidade de ${speed}km/h`);
    } else{
        let valor = (speed - 80) * 5
        console.log(`Multado! Velocidade de ${speed}km/h. Valor de R$${valor}`);  
    }
}

multa(speed)