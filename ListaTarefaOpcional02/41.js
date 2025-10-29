//41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade.
//Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.

let pessoa = {
  nome: "Patricia",
  idade: 24,
};

console.log("A idade é: ", pessoa.idade);

// add email
pessoa.email = "patricia@email.com";

console.log(
  `O Nome é ${pessoa.nome} , sua idade é ${pessoa.idade} e seu email é ${pessoa.email}`
);
