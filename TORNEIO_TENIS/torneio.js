const partidas = document.getElementById('console');
const botao = document.getElementById('enviar_console');

console.log("Digite a sequência de vitórias ou derrotas, em letras maiúsculo com base no tutorial abaixo do campo de inderção.")

botao.addEventListener('click', function(){
    console.log("O console recebeu as informações enviadas.")

    let sequencias = partidas.value;
    let count_vitoria = 0
    let count_derrota = 0

    sequencias = sequencias.split(",")

    sequencias.forEach(function(item) {
        if(item == "V" || item == "D"){

            if (item == "V"){
                count_vitoria++;
            }else{
                count_derrota++;
            }

            if ((count_derrota + count_vitoria) == 5){
                determinar_grupo(count_vitoria);
            }

        }
        else{
            console.log("Ops! Parece que você digitou um caractere inválido, por favor, corrija-o.")
        }

        
    })

})

function determinar_grupo(count_vitoria){
    if(count_vitoria == 1 || count_vitoria == 2){
        console.log("O participante será colocado no grupo 3.")
    }else if(count_vitoria == 3 || count_vitoria == 4){
        console.log("O participante será colocado no grupo 2.")
    }else if(count_vitoria == 5 || count_vitoria == 6){
        console.log("O participante será colocado no grupo 1.")
    }else{
        console.log("O participante não venceu nenhum jogo, logo foi desclassificado.")
    }
}