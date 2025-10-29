// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva.
// Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas.
// Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".

// 13 posições de 0 - 100
let gabarito = []; // 13 numeros

for (let i = 0; i < 13; i++) {
  gabarito.push(Math.floor(Math.random() * 13) + 1);
}

console.log("GABARITO");
console.table(gabarito);

for (let apostador1 = 1; apostador1 <= 100; apostador1++) {
  let numeroCartao = apostador1;
  let resposta = [];

  for (let i = 0; i < 13; i++) {
    resposta.push(Math.floor(Math.random() * 3) + 1);
  }

  let acerto = 0;
  for (let i = 0; i < 13; i++) {
    if (resposta[i] === gabarito[i]) {
      acerto++;
    }

    if (acerto === 13) {
      console.log("Você acertou 13 numeros");
    }
    console.log("RESPOSTA");
    console.log(resposta);
  }
}
