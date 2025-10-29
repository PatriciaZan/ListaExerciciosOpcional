// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

const vendas = [
  { vendedor: "Patricia", valor: 320 },
  { vendedor: "Patricia", valor: 140 },
  { vendedor: "Marcos", valor: 170 },
  { vendedor: "Maria", valor: 210 },
  { vendedor: "Carlos", valor: 80 },
];

function totalVendasVendedor(vendas) {
  const resultado = {};

  for (let venda of vendas) {
    if (resultado[venda.vendedor]) {
      resultado[venda.vendedor] += venda.valor;
    } else {
      resultado[venda.vendedor] = venda.valor;
    }
  }

  return resultado;
}

const total = totalVendasVendedor(vendas);
console.log(total);
