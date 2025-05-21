// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

var prompt = require('prompt-sync')();

let genero 
let salario

let countFem = 0
let countMasc = 0


// while (genero != 0){
//     console.log('Para finalizar digite 0');
    
//     genero = (prompt('Qual o Genero do funcionario(a), "Fem ou Masc"? : ')).toLowerCase()
//     salario = Number(prompt('Qual o salario? '))

//     if(genero === 'fem'){
//         countFem += salario
//     } else{
//         countMasc += salario
//     }
// }

do{
console.log('Para finalizar digite 0');
    
console.log('1 - Feminino');
console.log('2 - Masculino');

    genero = (prompt('Selcione a Opção do Genero do funcionario(a): ')).toLowerCase()
    if(genero != 0){
        salario = Number(prompt('Qual o salario? '))
    
        if(genero == 1){
            countFem += salario
        } else{
            countMasc += salario
        }
    }

}while(genero != 0)

console.log(`Salário total das Mulheres : ${countFem}`);
console.log(`Salário total dos Homens : ${countMasc}`);
