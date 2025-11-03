//49. Você recebe um array de objetos representando transações financeiras.
// Cada transação possui id, valor, data, e categoria.
// Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria.
// Adicionalmente, inclua um subtotal de valores por categoria.

const transacoes = [
  { id: 1, valor: 150, data: "2025-11-02", categoria: "Bike" },
  { id: 2, valor: 160, data: "2025-11-01", categoria: "Comida" },
  { id: 3, valor: 220, data: "2025-11-01", categoria: "Casa" },
  { id: 4, valor: 130, data: "2025-11-02", categoria: "Casa" },
];

function categoria(transacoes) {
  return transacoes.reduce((resultado, transacao) => {
    const { categoria, valor } = transacao;

    // Se a categoria ainda não existe no resultado, inicializa
    if (!resultado[categoria]) {
      resultado[categoria] = {
        transacoes: [valor],
        subtotal: 0,
      };
    }

    // Adiciona a transação e soma o subtotal
    resultado[categoria].transacoes.push(transacao);
    resultado[categoria].subtotal += valor;

    return resultado;
  }, {});
}

console.log(categoria(transacoes));
