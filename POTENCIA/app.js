const input = document.getElementById('console');
const botao = document.getElementById('enviar_console');
const expressoes_input = document.getElementById('expressoes_input');

console.log("Quantas expressões serão digitadas?");
    
let count = 1;
let quantidade_expressoes = 0;
var soma_total = 0;

botao.addEventListener('click', function(){

    if(count == 1){
        quantidade_expressoes = input.value;
        console.log("O código aceitará " + quantidade_expressoes + " expressões agora.");
        count++;
        input.disabled = true;
        expressoes_input.disabled = false;
        console.log("Digite as expressões, separando-as por ',' Ex.: 345,234,345 são 3 expressões.")
    }else{
        let valor = expressoes_input.value;
        let valores = valor.split(",")

        if(valores.length == quantidade_expressoes){
        valores.forEach(function(number){
                parseInt(number);
                num_caractere = number.length;
                let potencia = (number.substr(num_caractere - 1));
                let base =  (number.substr(0,num_caractere-1));;
                soma_total = soma_total + base ** potencia
        })
        console.log("O valor total da soma de todas as expressões, elevando o último digito de cada ao resto, é igual a: " + soma_total)
        }else{
            alert("Ops! Parece que a quantidade de expressões que você informou é diferente da que digitou, por favor tente novamente.")
            window.location.reload(true);
        }
    }
    
})
