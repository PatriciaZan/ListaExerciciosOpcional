// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci.

function fibonacci(){
    let a = 0;
    let b = 1; 
    let temp;
    //console.log(a);
    //console.log(b);

    let fiboArray = [];

    fiboArray.push(a,b)

    for(let i = 3; i <= 15; i++){
        temp = a + b
        //console.log(temp);
        fiboArray.push(temp);

        a = b;
        b = temp;
    }

    console.log(fiboArray);
}

fibonacci();