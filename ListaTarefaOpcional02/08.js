// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

var prompt = require('prompt-sync')();

let horas = Number(prompt('Quantas horas você praticou alguma atividade este mês? : '))


function calculaPontos(horas){
    let pontos
    let total
    if(horas && horas <= 10){
        pontos = horas * 2
    } else if(horas > 10 && horas <= 20){
        pontos = horas * 5
    } else if(horas > 20){
        pontos = horas * 10
    }

    total = pontos * 0.05

    return `O total de pontos foi ${pontos} e você acumulou R$${total} para resgate!`
}

console.log(calculaPontos(horas));
