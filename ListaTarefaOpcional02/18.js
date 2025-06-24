// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.

var prompt = require('prompt-sync')();
  
let nome = prompt("Qual o seu nome? ");
let cargo = prompt("Qual o seu cargo? ");
let salario = Number(prompt("Qual o seu salário? "));

let registro = 
    {
        nome: '',
        cargo: '',
        salario: null,
    }

function preenche(nome,  cargo, salario){
    if(nome && cargo && salario >= 0){
        registro.nome = nome
        registro.cargo = cargo
        registro.salario = salario
    }

    return console.log(registro);
    
}


preenche(nome, cargo, salario);
