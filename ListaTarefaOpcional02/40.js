//40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto.
//A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiro cada), representando as apostas feitas.
// Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial.
// (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)

let resultadoDaLoto = [3, 7, 17, 33, 42];

console.log("O Resultado da loteria foi: ", resultadoDaLoto);

const numeroApostas = 10; // 50 reduzido para 10 para simplificar

for (let i = 1; i <= numeroApostas; i++) {
  // aleatória
  const aposta = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 50) + 1
  );

  const resultado =
    aposta.every((num) => resultadoDaLoto.includes(num)) &&
    resultadoDaLoto.every((num) => aposta.includes(num));

  if (resultado) {
    console.log(`É um ganhador! ${aposta}`);
  } else {
    console.log(`Não ganhou! ${aposta}`);
  }
}
