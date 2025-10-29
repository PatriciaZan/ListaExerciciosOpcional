// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

function transforma(obj, func) {
  const novoObjeto = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      novoObjeto[key] = func(obj[key]);
    }
  }

  return novoObjeto;
}

const numbers = {
  a: 2,
  b: 4,
  c: 6,
};

function divide(valor) {
  return valor / 2;
}

const resultado = transforma(numbers, divide);
console.log(resultado);
