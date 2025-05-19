// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

var prompt = require('prompt-sync')();

let cigarrosFumados = Number(prompt("Quantos cigarros você fumou hoje? : "));
let anosFumados = Number(prompt("Por quantos anos já fumou? :"));

function LostAge(cigarros){
    let result = (10 * cigarrosFumados) ;

    if(result < 60){
        return `Você perdeu ${result} minutos de sua vida! E já fumou por ${anosFumados} anos.`
    } else if( result >= 60 && result < 1440){
        let horas = (result / 60).toFixed(2);
        return `Você perdeu ${horas} horas da sua vida! E já fumou por ${anosFumados} anos.`
    } else if( result >= 1440){
        let dias = (result / 60).toFixed / 24
        return `Você perdeu ${dias} da sua vida! E já fumou por ${anosFumados} anos.`
    } else{
      return `Número inválido!`  
    }
    
}

console.log(LostAge(cigarrosFumados));
