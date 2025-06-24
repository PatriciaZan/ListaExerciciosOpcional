// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$350,00. 


var prompt = require('prompt-sync')();

const salariosArray = []
const filhosArray = []

let salario
let filho

while(salario !== 1){
    
    console.log('Para finalizar digite "1"');
    salario = Number(prompt('Qual o seu salário? :  R$'))
    
    if(salario !== 1){
        filho = Number(prompt('Quantos filhos(as) você possui? : '))
        filhosArray.push(filho)
        salariosArray.push(salario)
    }
}

//console.log(salariosArray);
//console.log(filhosArray);

let soma = 0

const media = (array) => {

    for(let i = 0; i < array.length; i++){
        soma += +array[i]  
        //console.log(soma);
    }
    
    let media = soma / array.length
    soma = 0
    return media
    
}

// console.log(media(filhosArray));


console.log(`A média de filhos é  -> ${media(filhosArray)}`);
console.log(`A média de salário é -> R$${media(salariosArray)}`);