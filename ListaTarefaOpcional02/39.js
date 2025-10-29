//39. Faça um algoritmo que leia um vetor (A) de 100 posições.
// Em seguida, compacte o vetor, retirando os valores nulos e negativos.
//  Coloque o resultado no vetor B.

// gerar numero nulos e negativos no random

let A = [];
for (let i = 0; i < 100; i++) {
  A.push(Math.floor(Math.random() * 31) - 10); // até 20
}

console.log(A);

let B = A.filter((valor) => valor > 0);

console.log("VETOR B");
console.log(B);
