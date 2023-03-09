const readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 


function requisita_idade(){
    leitor.question("Qual a sua idade: ", (idade) => {
        console.log("Então sua idade é: " + idade);
        return idade;

    })
}

var idade = requisita_idade();
console.log(idade);

// console.log("E sua idade equivale à" + idade);