const readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 


leitor.question("Quantas expressões serão inseridas: ", (num_expressoes) => {
    console.log(num_expressoes)
    

    for(let limitante = 0; limitante != num_expressoes; limitante++){
        leitor.question("Qual a expressão: ", (expressao => {
            num_caractere = expressao.length;
            let potencia = (expressao.substr(num_caractere - 1));
            let base =  (expressao.substr(0,num_caractere-1));;
            console.log(base ** potencia);
            
        }))
    }

    leitor.close();

})