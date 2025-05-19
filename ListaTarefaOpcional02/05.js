//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

 var prompt = require('prompt-sync')();

 console.log('1 - Pedra');
 console.log('2 - Papel');
 console.log('3 - Tesoura');

let user = Number(prompt('Escolha: '))


// Converte a escolha do usuario
function userChoiceFunc(user){
    switch (user){
        case 1:
            return 'Pedra';
        case 2:
            return 'Papel';
        case 3:
            return 'Tesoura';
    }
}

let userChoice = userChoiceFunc(user)
console.log(`Você escolheu : ${userChoice}`);

// Realiza uma escolah aleatoria da maquina
function machineChoiceFunc(){
     let machineRandom = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

     switch (machineRandom){
         case 1:
             return 'Pedra';
         case 2:
             return 'Papel';
         case 3:
             return 'Tesoura';
     }
}

let machineChoice = machineChoiceFunc()
console.log(`A Máquina escolheu : '${machineChoice}'`);

function playGame(user , machine){
    if(user == 'Pedra' && machine == 'Tesoura'){
        return "Você Ganhou!"
    } else if( user == 'Pedra' && machine == 'Papel'){
        return "Você Perdeu!"
    } else if( user == 'Tesoura' && machine == 'Papel'){
        return "Você Ganhou!"
    } else if( user == 'Tesoura' && machine == 'Pedra'){
        return 'Você Perdeu!'
    } else if( user == 'Papel' && machine == 'Pedra'){
        return 'Você Ganhou!'
    } else if( user == 'Papel' && machine == 'Tesoura'){
        return 'Você Perdeu!'
    } else if( user == machine){
        return 'Deu Empate'
    } else {
        return "Algo deu errado!"
    }
}

console.log(playGame(userChoice, machineChoice));

