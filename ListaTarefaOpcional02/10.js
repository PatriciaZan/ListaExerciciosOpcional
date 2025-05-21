// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

var prompt = require('prompt-sync')();

do{
    console.log('Para finalizar digite 0');

    let soma 
    if(num != 0){
        let num = Number(prompt('Digite um número:'))

        soma += num
        
    }

}while(num != 0)