// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.
let matriz = [];

let tamanho = 50;

for (let i = 0; i < tamanho; i++) {
  matriz[i] = [];

  for (let j = 0; j < tamanho; j++) {
    matriz[i][j] = Math.floor(Math.random() * 10) + 1;
  }
}
console.log("Matriz original");
console.table(matriz);

for (let i = 0; i < tamanho; i++) {
  let diagonal = parseFloat(matriz[i][i]);
  for (let j = 0; j < tamanho; j++) {
    matriz[i][j] = parseFloat(matriz[i][j] * diagonal);
  }
}

console.log("---------------------------------------------");
console.log("Matriz multiplicada");

console.table(matriz);
