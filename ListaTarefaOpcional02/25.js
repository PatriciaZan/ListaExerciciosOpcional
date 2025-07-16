// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
//de cada coluna separadamente.

// Receber duas matrizes com 15 linhas X 20 colunas(elementos)
// hardCode? ou Random -> pode ser mais pratico?

function soma(){
    const numeroLinhas = 15;
    const numeroElementos = 20;
    // cria uma matriz base
    const matriz = []

    for(let i = 0; i < numeroLinhas; i++){
        // adiciona linhas
        matriz[i] = []
        for(let j = 0; j < numeroElementos; j++){
            // adiciona elementos + gera um numero aleatorio para popular (entre 1 e 10)
            matriz[i][j] = parseFloat((Math.random() * 100).toFixed(2))
        }
    }
    
    // Soma aqui
    // cria uma nova matriz e preenche com zeros, com base nos eleementos
    const matrizSoma = new Array(numeroElementos).fill(0)

    for(let i = 0; i < numeroElementos; i++){
        for(let j = 0; j < numeroLinhas; j++){
            matrizSoma[j] += matriz[i][j]
        }
    }


    // Mostrar
    for(let i = 0; i < numeroElementos; i++){
        console.log(`Colunas ${i + 1}: ${matrizSoma[i]}`);
        
    }
}

soma()