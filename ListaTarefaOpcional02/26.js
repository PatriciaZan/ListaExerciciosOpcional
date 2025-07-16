//26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1...3,1..5], calcular a matriz produto
// P[1..3,1..5]

// Vai ter duas Matriz
// Produto é valorA X valorB
// Criar uma matriz produto com os resultados

const matrizA = [
    [1, 3],
    [2, 4]
]
const matrizB = [
    [5, 7],
    [6, 8]
]

function matrizProduto(A, B){
    const linhasA = A.length;
    const colunasA = A[0].length;
    const linhasB = B.length;
    const colunasB = B[0].length;

    // criar e iterar um novo array produto apartir do modelo do arrayA - Preenche com 0
    const produto = []
    for(let i = 0; i < linhasA; i++){
        produto.push(new Array(colunasA).fill(0));
    }

    // Itera cada elemento das duas matrizes calculando o produto A * B
    for(let i = 0; i < linhasA; i++){
        for(let j = 0; j < colunasA; j++){
            produto[i][j] = matrizA[i][j] * matrizB[i][j];
        }
    }

    // retorna o produto
    return produto

}


const resultado = matrizProduto(matrizA, matrizB)

console.table(resultado);
