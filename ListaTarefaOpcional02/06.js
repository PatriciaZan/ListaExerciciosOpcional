//6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. 
// O jogador vai tentar descobrir qual foi o valor sorteado.
 
var prompt = require('prompt-sync')();


let randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
console.log(randomNumber);



