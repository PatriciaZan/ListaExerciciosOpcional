// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

function fibonacci(){
    let a = 0, b = 1, temp
    console.log(a);
    console.log(b);

    for(let i = 3; i <= 12; i++){
        temp = a + b
        console.log(temp);
        a = b 
        b = temp
    }
}
fibonacci()