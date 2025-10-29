//45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.

const dias = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
  "Domingo",
  "Segunda",
  "Segunda",
];

function contaVezesOcorrencia(array) {
  const count = {};

  for (let item of array) {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  }

  return count;
}

const contagem = contaVezesOcorrencia(dias);
console.log(contagem);

// com Reduce
// undefine na terça ??
// const contaVezesOcorrenciaReduce = (array) =>
//   array.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//   }, {});

// const contagemReduce = contaVezesOcorrenciaReduce(dias);
// console.log(contagemReduce);
