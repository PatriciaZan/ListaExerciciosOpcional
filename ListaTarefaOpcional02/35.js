// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.

let valores = [];
for (let i = 0; i < 30; i++) {
  valores.push(Math.floor(Math.random() * 100) + 1);
}

let par = [];
let impar = [];

for (let i = 0; i < valores.length; i++) {
  let num = valores[i];

  if (num % 2 === 0) {
    par.push(num);
    if (par.length === 5) {
      console.log("Array Par está cheio (5) ", par);
      par = [];
    }
  } else {
    impar.push(num);
    if (impar.length === 5) {
      console.log("Array impar cheio (5) ", impar);
      impar = [];
    }
  }
}
