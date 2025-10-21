// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

let matriz = [];
let count = 1;
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = count++;
  }
}
console.log("-- Original --");
console.table(matriz);

let somaSecundaria = 0;
for (let i = 0; i < 3; i++) {
  somaSecundaria += matriz[i][2 - i];
}

let mediaSecundaria = somaSecundaria / 3;

for (let i = 0; i < 3; i++) {
  matriz[i][i] *= mediaSecundaria;
}

console.log("-- Multiplicação --");
console.table(matriz);
