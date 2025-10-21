// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.

// Valor inteiro
let A = 3;
console.log(`-- Numero inteiro: ${A} --`);

// Matriz 30x30
let V = [];

let count = 1;

for (let i = 0; i < 30; i++) {
  V[i] = [];
  //   for (let j = 0; j < 30; j++) {
  //     V[i][j] = count++;
  //   }

  // PAra pdoer contar quantas repetições estabeleci numeros aleatório até 10
  for (let j = 0; j < 30; j++) {
    V[i][j] = Math.floor(Math.random() * 10) + 1;
  }
}
console.log("Matriz V");
console.log(V);

let numerosIguaisCount = 0;

let X = [];

for (let i = 0; i < 30; i++) {
  X[i] = [];

  for (let j = 0; j < 30; j++) {
    if (V[i][j] === A) {
      numerosIguaisCount++;
      X[i][j] = null;
    } else {
      X[i][j] = V[i][j];
    }
  }
}

console.log(`Numeros iguais a ${A} são : ${numerosIguaisCount}`);
console.log(`Matriz`);
console.table(V);
console.log(`Matriz contendo nuemros diferentes de ${A}`);
console.table(X);
