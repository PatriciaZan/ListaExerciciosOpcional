//27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
//    multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
//    um vetor V(36). Escrever o vetor V no final.

// Cria uma matriz (6,6)
let M = [];

// Cria a matriz V(36)
let V = [];

// O valor que será multiplicado a matriz M
let valueToMultiply = 3;

// preenche a matriz M
let count = 1;
for (let i = 0; i < 6; i++) {
  M[i] = [];
  for (let j = 0; j < 6; j++) {
    M[i][j] = count++;
  }
}
console.log(`Matriz original M: `);
console.log(M);

// Multiplcia a matriz M por valueToMultiply e escreve o resultado na matriz V
let index = 0;
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    V[index] = M[i][j] * valueToMultiply;
    index++;
  }
}

console.log(`Matriz multiplicada por ${valueToMultiply}`);
console.log(V);
