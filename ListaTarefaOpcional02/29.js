//29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
//  a) da linha 4 de M;
//  b) da coluna 2 de M;
//  c) da diagonal principal;
//  d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

const { jsx } = require("react/jsx-runtime");

// Criação e inicializaçã oda matriz M(5,5)
let M = [];
let count = 1;
for (let i = 0; i < 5; i++) {
  M[i] = [];
  for (let j = 0; j < 5; j++) {
    M[i][j] = count++;
  }
}

console.log(M);

// inicializa as somas
let linhaQuatro = 0;
let colunaDois = 0;
let DiagonalPrincipal = 0;
let total = 0;

// Percorre e soma
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    // indice 3
    if (i === 3) {
      linhaQuatro += M[i][jsx];
    }

    if (j == 1) {
      colunaDois += M[i][j];
    }

    if (i === j) {
      DiagonalPrincipal += M[i][j];
    }

    total += M[i][j];
  }
}
//  a) da linha 4 de M;
//  b) da coluna 2 de M;
//  c) da diagonal principal;
//  d) todos os elementos da matriz M.

console.log(`Soma da linha 4: ${linhaQuatro}`);
console.log(`Soma da coluna 2: ${colunaDois}`);
console.log(`Soma da diagonal principal: ${DiagonalPrincipal}`);
console.log(`Soma total: ${total}`);
