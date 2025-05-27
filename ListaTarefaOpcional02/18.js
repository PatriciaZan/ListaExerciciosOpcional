// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

var prompt = require('prompt-sync')();

let end;

while(end != '0'){
    console.log("Para finalizar digite '0(zero)'");
    end = prompt('Para continuar digite 1')
    
    let nome = prompt("Qual o seu nome? ")
    let cargo = prompt("Qual o seu cargo? ")
    let salario = Number(prompt("Qual o seu salário? "))

}