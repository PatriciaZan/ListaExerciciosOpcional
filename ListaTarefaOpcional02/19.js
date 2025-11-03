// 19. Escrever um programa para ler 5 horários. Validar cada horário
//      fornecendo através de repetição.
//      Escrever cada um deles no formato HH.MM.SS.

var prompt = require("prompt-sync")();

// const horarios = [];

// for (let i = 1; i <= 5; i++) {
//   let horario = prompt(`Qual o ${i}º horario?: `);
//   horarios.push(horario);
// }

// console.log(horarios);

// function readTimes() {
//   if (currIndex < horarios) {
//     return horarios[currIndex++];
//   }
//   return null;
// }

// function validarEFormat(horarioString) {
//   if (!/^\d{2}:\d{2}:\d{2}$/.test(horarioString)) {
//     return null;
//   }

//   const separado = horarioStr.split(":");
//   const HH = parseInt(separado[0], 10);
//   const MM = parseInt(separado[1], 10);
//   const SS = parseInt(separado[2], 10);

//   if (HH >= 0 && HH <= 23 && MM >= 0 && MM <= 59 && SS >= 0 && SS <= 59) {
//     return `${String(HH).padStart(2, "0")}.${String(MM).padStart(
//       2,
//       "0"
//     )}.${String(SS).padStart(2, "0")}`;
//   } else {
//     return null;
//   }
// }

const horarios = [];
let hora, minuto, segundo;

for (let i = 1; i <= 2; i++) {
  console.log(`Qual o ${i}º horario?: `);

  let hora = prompt(`Qual a hora? : `);
  let minuto = prompt(`Qual o minuto? : `);
  let segundo = prompt(`Qual o segundo? : `);

  if (
    !isNaN(hora) &&
    hora >= 0 &&
    hora <= 23 &&
    !isNaN(minuto) &&
    minuto >= 0 &&
    minuto <= 59 &&
    !isNaN(segundo) &&
    segundo >= 0 &&
    segundo <= 59
  ) {
    let horario = `${hora}H: ${minuto}min : ${segundo}s`;
    horarios.push(horario);
  } else {
    console.log("Horário inválido! Tente novamente.");
  }
}

console.log(horarios);
