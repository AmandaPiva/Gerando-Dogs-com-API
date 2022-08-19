/*2º exercício

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:*/

function par(x, y){

    var pares = [];
    for(var i = x; i < y; i++){
        if(i % 2 == 0){
            pares.push(i);
        }
    }
    return console.log(pares);
}

par(1, 10);
