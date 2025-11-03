// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

const matriz = [
  [1, -2, 3, 0], // linha 1 tematriz 1 negativo no index 1
  [9, 0, 4, 1],
  [-5, 6, -7, 18],
  [1, -10, 0, -1],
  [5, 4, 4, 5],
  [-1, -3, -2, -8],
];

function contarNegativosPorLinha(matriz) {
  const C = [];

  for (let i = 0; i < matriz.length; i++) {
    let cont = 0;

    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] < 0) {
        cont++;
      }
    }
    C.push(cont);
  }
  return C;
}

const resultado = contarNegativosPorLinha(matriz);
console.log("Números negativos por linha");

console.log(resultado);
