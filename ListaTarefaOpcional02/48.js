//48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB.
//Cada chave é um item, e o valor é a quantidade desse item em estoque.
//Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.

const inventarioLojaA = {
  lapis: 10,
  caneta: 4,
  caderno: 4,
};
const inventarioLojaB = {
  caderno: 12,
  folhaA4: 4,
  papelao: 30,
};

function combinaInventario(a, b) {
  const combinado = { ...a };

  for (let item in b) {
    if (combinado[item]) {
      combinado[item] += b[item];
    } else {
      combinado[item] = b[item];
    }
  }

  return combinado;
}

const inventarioCombinado = combinaInventario(inventarioLojaA, inventarioLojaB);
console.log("Os dois inventarios são: ", inventarioCombinado);
