<?php

$numero_expressoes = readline("Quantas expressões haverá: ");

$limitador = 0;

$valor_total = 0;

while ($limitador != $numero_expressoes){
    
    $numero = readline("Qual a expressão: ");
    $numero = strval($numero);
    $caracteres = strlen($numero);

    $potencia = $numero[$caracteres-1];
    $array = [1,2,3,4];

    // foreach (range(0, $caracteres - 1) as $number) {
    //     $array[] = $number;
    // }
    
    

    $limitador++;
}

foreach ($array as $i){
    echo ":" . $array[$i];
};

?>