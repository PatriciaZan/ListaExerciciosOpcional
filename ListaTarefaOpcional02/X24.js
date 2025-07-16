// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

const matriz = [
    [  1,   -2,   3,   0 ],  // linha 1 tematriz 1 negativo no index 1
    [  9,    0,   4,   1 ], 
    [ -5,    6,  -7,  18 ], 
    [  1,  -10,   0,  -1 ], 
    [  5,    4,   4,   5 ], 
    [ -1,   -3,  -2,  -8 ]  
];

let numerosNegativos = [] // Aqui vai adicionar os valores negativos
let cotadorDeNegativo = 0; // quantos negativos na matrizatriz

for(let i = 0; i < matriz.length; i++){
    // aqui percorre cada linha
    console.log(matriz[i]);

    for(let j = 0; j < matriz[i].length; j++){
    // aqui vai percorrer cada elemento de cada linha

        numerosNegativos[i] = []
        
        if(matriz[i][j] < 0){
            cotadorDeNegativo++

            let valor = matriz[i][j]
            numerosNegativos[i][j].push(valor)

            //numerosNegativos.push(matriz[i][j])
        } else{
            //numerosNegativos[i][j] = '0'
        }
        
    }
}

console.log(cotadorDeNegativo);
console.log(numerosNegativos);



// for(let i = 0; i < M.length; i++){
//     // negativos que estão na linha
//     let negativos = 0

//     let linhaAtual = M[i]

//     for(let col = 0; col < i.length; col++){
//         let elemento = i[col]

//         if(elemento < 0){
//            cotadorDeNegativo++
//         }
//     }

//     C.push(cotadorDeNegativo)
// }


// // IMPRIME A MATRIZ M

// console.log(`--- Matriz M ---`);
// for(let m = 0; m < M.length; m++){
//     console.log(`Linha ${m + 1} - [${M[m].join(", ")}]`);
// }

// // IMPRIME A MATRIZ C - quantidade de negativos contidos em M

// console.log('-----------------');
// console.log('Matriz C - Quantia de numeros negativos contidos em M');

// for(let c = 0; c < C.length; c++){
//     console.log(`Linha ${c+1} de M possui ${C[c]} numeros negativos`);
// }


// // IMPRIME A MATRIZ C - Negativos contidos em M

// console.log("O Vetor C final = [", C.join(", "), "]");



