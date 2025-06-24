// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.

let matrizSize = 7
let matriz = []

for(let i = 0; i < matrizSize; i++){
    let newLine = [];

    for(let col = 0; col < matrizSize; col++){
        if(i === col){
            newLine.push(1)
        }else{
            newLine.push(0)
        }
    }

    matriz.push(newLine)
}

//Print matriz
for(let line = 0; line < 7; line++){
    console.log(matriz[line].join(" "));
    
}