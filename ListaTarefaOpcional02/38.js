// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta variável:

// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

let vetor = [1, 2, 3, 4, 5, 6];
console.log("Vetor Inicial: ", vetor);

let identificadora = 3;

switch (identificadora) {
  case 1:
    const soma = vetor.reduce((acc, val) => acc + val, 0);
    console.log("A soma é: ", soma);
    break;

  case 2:
    const produto = vetor.reduce((acc, val) => acc * val, 1);
    console.log("Produto é:", produto);
    break;

  case 3:
    const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
    console.log("Média é:", media.toFixed(2));
    break;

  case 4:
    vetor.sort((a, b) => a - b);
    console.log("Vetor ordenado é:", vetor);
    break;

  case 5:
    console.log("O vetor é:", vetor);
    break;

  default:
    console.log("Identificadora não é valida!");
}
