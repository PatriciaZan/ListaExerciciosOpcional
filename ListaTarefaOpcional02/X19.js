// 19. Escrever um programa para ler 5 horários. Validar cada horário
//      fornecendo através de repetição.
//      Escrever cada um deles no formato HH.MM.SS.

var prompt = require("prompt-sync")();

const horarios = [];

for (let i = 1; i <= 5; i++) {
  let horario = prompt(`Qual o ${i}º horario?: `);
  horarios.push(horario);
}

//console.log(horarios);

function readTimes() {
  if (currIndex < horarios) {
    return horarios[currIndex++];
  }
  return null;
}

function validarEFormat(horarioString) {
  if (!/^\d{2}:\d{2}:\d{2}$/.test(horarioString)) {
    return null;
  }

  const separado = horarioStr.split(":");
  const HH = parseInt(separado[0], 10);
  const MM = parseInt(separado[1], 10);
  const SS = parseInt(separado[2], 10);

  if (HH >= 0 && HH <= 23 && MM >= 0 && MM <= 59 && SS >= 0 && SS <= 59) {
    return `${String(HH).padStart(2, "0")}.${String(MM).padStart(
      2,
      "0"
    )}.${String(SS).padStart(2, "0")}`;
  } else {
    return null;
  }
}
