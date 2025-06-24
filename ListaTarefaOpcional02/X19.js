// 19. Escrever um programa para ler 5 horários. Validar cada horário
//      fornecendo através de repetição. 
//      Escrever cada um deles no formato HH.MM.SS.

var prompt = require('prompt-sync')();

const hora1 = prompt("Qual o 1º horario?: ")
const hora2 = prompt("Qual o 2º horario?: ")
//const hora3 = prompt("Qual o 3º horario?: ")
//const hora4 = prompt("Qual o 4º horario?: ")
//const hora5 = prompt("Qual o 5º horario?: ")

function validar(hora){
    const [hora, minuto] = hora.split(':').map(Number)
}