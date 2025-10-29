// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova.
// A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos.
//Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

let gabarito = [
  "A",
  "A",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "C",
  "B",
  "C",
  "D",
  "D",
  "B",
  "B",
  "B",
];

const alunos = 50;

for (let i = 1; i < alunos; i++) {
  const respostas = Array.from({ length: 20 }, () => {
    const alternativas = ["A", "B", "C", "D"];
    return alternativas[Math.floor(Math.random() * alternativas.length)];
  });

  let acertos = 0;
  for (let j = 0; j < 20; j++) {
    if (respostas[j] === gabarito[j]) {
      acertos++;
    }
  }

  const resultado = acertos >= 12 ? "APROVADO" : "REPROVADO";
  console.log(`Aluno ${i}: ${acertos} acertos: ${resultado}`);
}
