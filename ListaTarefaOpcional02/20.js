// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    // Matrícula:
    // Nome:
    // Salário bruto:
    // Dedução INSS:
    // Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

let folhaPagamentos = [
    {
        Matricula: '0',
        Nome: 'James Bond',
        SalarioBruto: 700000,
        DeducaoINSS: null,
        SalarioLiquido: null
    },

    {
        Matricula: '1',
        Nome: 'Jorge da Esquina',
        SalarioBruto: 2000000,
        DeducaoINSS: null,
        SalarioLiquido: null,
    }
]

const deducaoINSS = (salario, inss) => {
    let deducao = +salario * (+inss/100)
    return deducao
}

//console.log(deducaoINSS('1000', '12'));
//console.log(deducaoINSS(folhaPagamentos[0]));

let inss = deducaoINSS(folhaPagamentos[0].SalarioBruto, 12)
console.log(inss);

const salarioreal = (SalarioBruto, deducaoINSS) => {
    return SalarioBruto - deducaoINSS
}


let buscaPorMatricula = 0;

// A Tabela 
console.log('____Tabela Contracheque____');
console.log(`Matricula ________ ${folhaPagamentos[buscaPorMatricula].Matricula}`);
console.log(`Nome _____________ ${folhaPagamentos[buscaPorMatricula].Nome}`);
console.log(`Salario Bruto ____ ${folhaPagamentos[buscaPorMatricula].SalarioBruto}`);
console.log(`Dedução INSS _____ ${folhaPagamentos[buscaPorMatricula].DeducaoINSS = deducaoINSS(folhaPagamentos[0].SalarioBruto, 12)}`);
console.log(`Salario Liquido __ ${folhaPagamentos[buscaPorMatricula].SalarioLiquido = salarioreal(folhaPagamentos[0].SalarioBruto, folhaPagamentos[0].DeducaoINSS)}`);
// console.log(`Salario Liquido __ ${folhaPagamentos[0].SalarioLiquido = (folhaPagamentos.SalarioBruto - folhaPagamentos.DeducaoINSS )}`);



