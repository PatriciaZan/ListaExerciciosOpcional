//28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
//  a) a soma dos elementos acima da diagonal principal;
//  b) a soma dos elementos abaixo da diagonal principal;

// Criando a matriz 10x10
let matriz = [];

let count = 1;
for (let i = 0; i < 10; i++) {
  matriz[i] = [];
  for (let j = 0; j < 10; j++) {
    matriz[i][j] = count++;
  }
}

console.table(matriz);

//inicializa a variavél para a soma dos elementos acima da diagonal principal;
let diagonalAcima = 0;
//inicializa a variavél para a soma dos elementos abaixo da diagonal principal;
let diagonalAbaixo = 0;

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i < j) {
      diagonalAcima += matriz[i][j];
    }

    if (i > j) {
      diagonalAbaixo += matriz[i][j];
    }
  }
}

console.log("Soma das diagonais principais:");

console.log(`Acima : ${diagonalAcima}`);
console.log(`Abaixo: ${diagonalAbaixo}`);
