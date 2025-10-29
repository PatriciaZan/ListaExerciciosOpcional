//44. Escreva uma função que conte quantas propriedades do tipo string existem em um
//objeto e retorne esse número.

const dados = {
  nome: "Patricia",
  idade: 24,
  profissao: "Estudante",
  email: "patricia@email.com",
};

function contaStrings(objeto) {
  let count = 0;

  for (let key in objeto) {
    if (typeof objeto[key] === "string") {
      count++;
    }
  }

  return count;
}

const quantasStrings = contaStrings(dados);
console.log(`O Objeto dados tem ${quantasStrings} strings`);
