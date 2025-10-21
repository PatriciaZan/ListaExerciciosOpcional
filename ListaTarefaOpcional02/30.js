// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.

// Cria a matriz e coloca conteúdo
let M = [];
let count = 1;
for (let i = 0; i < 5; i++) {
  M[i] = [];
  for (let j = 0; j < 5; j++) {
    M[i][j] = count++;
  }
}
console.log("Matriz M");
console.log(M);

// será a soma de cada linha, te meque ser um array contendo a soma
let somaLinhas = [0, 0, 0, 0, 0];
let somaColunas = [0, 0, 0, 0, 0];

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    somaLinhas[i] += M[i][j];
    somaColunas[j] += M[i][j];
  }
}

console.log("-- Soma das linhas --");
console.log(somaLinhas);

console.log("-- Soma das Colunas --");
console.log(somaColunas);
