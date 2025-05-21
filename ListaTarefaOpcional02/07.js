// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

var prompt = require('prompt-sync')();

console.log('1 - Carro Popular');
console.log('2 - Carro de Luxo');


let tipoCar = Number(prompt("Digite sua opção 1 / 2: "));
let days = Number(prompt('Quantos dias você alugou? : '));
let km = Number(prompt('quantos Kms você rodou? : '));

let valorDays
let valorKm
let total

if(tipoCar && tipoCar === 1){
    valorDays = days * 90
  
    if(km <= 100){
        valorKm = km * 0.20
    } else{
        valorKm = km * 0.10
    }
    
    total = valorDays + valorKm

    console.log(`Carro popular. 
        Valor diária de ${days} = R$${valorDays}
        Valor por ${km}Km rodados = R$${valorKm}
        Total de R$${total}`);

}else{
    valorDays = days * 150

    if(km <= 200){
        valorKm = km * 0.30
    } else{
        valorKm = km * 0.25
    }

    total = valorDays + valorKm

    console.log(`Carro De Luxo. 
        Valor diária de ${days} = R$${valorDays}
        Valor por ${km}Km rodados = R$${valorKm}
        Total de R$${total}`);
}

