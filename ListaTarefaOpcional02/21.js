//21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
//retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
//= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

var prompt = require('prompt-sync')();

const altura = Number(prompt("Qual a sua altura?: "))
const genero = prompt("Qual o seu genero? (Fem, Masc): ")

//console.log(altura, genero);


const calcPesoIdeial = (altura, genero) => {
    let pesoIdeal;

    if(genero === 'fem'){     
        let pesoIdeal = (62.1 * altura / 100) - 44.7
        return pesoIdeal
    } else if( genero === 'masc'){
        let pesoIdeal = (72.7 * altura / 100) - 58
        return pesoIdeal
    } else{
        let pesoIdeal = 'Valor do genero invalido!'
        return pesoIdeal
    }

}

console.log(calcPesoIdeial(altura, genero));
