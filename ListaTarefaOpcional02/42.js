//42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays.
// Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.

let dados = {
  nome: "Patricia",
  idade: 24,
  email: "patricia@email.com",
  estudante: true,
  notas: [10, 9, 8, 7],
};

function apenasArrays(obj) {
  const resultado = {};

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      resultado[key] = obj[key];
    }
  }

  return resultado;
}

const array = apenasArrays(dados);

console.log("Objeto dados: ", dados);
console.log("Contém esses arrays:", array);
