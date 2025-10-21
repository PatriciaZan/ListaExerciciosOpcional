// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

// 12 linahs 13 colunas

let M = [];
for (let i = 0; i < 12; i++) {
  M[i] = [];
  for (let j = 0; j < 13; j++) {
    M[i][j] = Math.floor(Math.random() * 10) + 1; // valores de -50 a 50
  }
}

console.table(M);

for (let i = 0; i < 12; i++) {
  let maiorElementoModulo = Math.max(...M[i].map((x) => Math.abs(x)));

  if (maiorElementoModulo === 0) maiorElementoModulo = 1;

  for (let j = 0; j < 13; j++) {
    M[i][j] = M[i][j] / maiorElementoModulo;
  }
}

console.table(M);
