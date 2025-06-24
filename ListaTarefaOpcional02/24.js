// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

const M = [
    [  1,   -2,    3,    0,   -5,   -6,   9,   8 ],  
    [  9,    0,   10,    1,  -12,  -13,   0, -14 ], 
    [-15,   16,  -17,   18,  -19,   20, -21,  22 ], 
    [  0,  -22,    0,  -21,    0,  -32,   0,  -4 ], 
    [  5,    4,    4,    5,   -5,   -6,   5,  -5 ], 
    [ -1,   -3,   -2,  - 8,   -1,   -1,  -6,  -1 ]  
];

let C = []
let cotadorDeNegativo = 0;

for(let i = 0; i < M.length; i++){
    // negativos que estão na linha
    let negativos = 0

    let linhaAtual = M[i]

    for(let col = 0; col < i.length; col++){
        let elemento = i[col]

        if(elemento < 0){
           cotadorDeNegativo++
        }
    }

    C.push(cotadorDeNegativo)
}


// IMPRIME A MATRIZ M

console.log(`--- Matriz M ---`);
for(let m = 0; m < M.length; m++){
    console.log(`Linha ${m + 1} - [${M[m].join(", ")}]`);
}

// IMPRIME A MATRIZ C - quantidade de negativos contidos em M

console.log('-----------------');
console.log('Matriz C - Quantia de numeros negativos contidos em M');

for(let c = 0; c < C.length; c++){
    console.log(`Linha ${c+1} de M possui ${C[c]} numeros negativos`);
}


// IMPRIME A MATRIZ C - Negativos contidos em M

console.log("O Vetor C final = [", C.join(", "), "]");



