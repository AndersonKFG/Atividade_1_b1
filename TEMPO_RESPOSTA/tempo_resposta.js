//SARA SÓ ENVIA RESPOSTAS A MENSAGENS QUE ELA RECEBEU
//SARA SÓ ENVIA 1 REPOSTA 
//SARA SÓ RECEBE MENSAGENS APÓS RESPONDER A ULTIMA MENSAGEM QUE RESPONDEU

// R X indica que uma mensagem foi recebida do amigo X.
// E X indica que uma mensagem foi enviada ao amigo X.

// T X indicando que X segundos se passaram entre o evento anterior e o evento posterior a esse registro.
// Caso não haja T indicado, T é por padrão igual a 1 segundo.  

// "Tempo de resposta" é o tempo que se passou em que sara recebeu a mensagem e o tempo em ela respondeu.
// "Tempo de resposta total" 

const perguntas = document.getElementById('perguntas');
const respostas = document.getElementById('respostas');
const iniciar_conversa = document.getElementById('iniciar_conversa');
const enviar_console = document.getElementById('enviar_console');

console.log("Clique no botão de iniciar conversa para abrir a caixa de pergunta pra Sara.");
let segundos = 0;
let segundos_totais = 0;
let contar = "";

function resetar_segundos(){
    segundos = 0;
}

function resetar_segundos_totais(){
    segundos_totais = 0;
}

function contar_segundos(){
    segundos++;
}

iniciar_conversa.addEventListener('click', function(){
    perguntas.disabled = false;
    enviar_console.disabled = false;
    contar = setInterval(contar_segundos, 1000);
})

enviar_console.addEventListener('click', function(){
    clearInterval(contar);
    segundos_totais = segundos_totais + segundos;
    perguntas.disabled = true;
    enviar_console.disabled = false;
})