//43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
//combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
//sobre as do obj1 em caso de conflitos.

const obj1 = {
  nome: "Patricia",
  idade: 24,
  profissao: "Estudante",
};

const obj2 = {
  profissao: "Programadora",
  ingles: true,
};

function combinar(obj1, obj2) {
  const objCombinado = { ...obj1, ...obj2 };
  return objCombinado;
}

const teste = combinar(obj1, obj2);

console.log("Objeto combinados: ", teste);
