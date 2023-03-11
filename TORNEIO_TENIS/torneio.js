const partidas = document.getElementById('console');
const botao = document.getElementById('enviar_console');

console.log("Digite a sequÊncia de vitórias ou derrotas, em letras maiúsculo com base no tutorial abaixo do campo de inderção.")

botao.addEventListener('click', function(){
    let sequencias = partidas.value;
    sequencias = sequencias.split(",")

    //ERRO NA HORA DE VERIFICAR SE TEM ALGUMA INSERÇÃO DIFERENTE DE V OU D
    sequencias.forEach((vOUd) => {
        if(vOUd != "V" || vOUd != "D"){
            console.log(vOUd)
            console.log("Por favor, corrija o erro de digitação, o código aceita apenas 'V' ou 'D'.")
        }
    })






    // if(sequencias.length != 5){
    //     console.log("Por favor digite o resultado de 5 partidas")
    // }else{

    // }
})