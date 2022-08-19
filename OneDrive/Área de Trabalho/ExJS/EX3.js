/*3º exercício

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade “Javascript” e retorna um booleano true/false caso exista ou não. */

let habilidade = ["PHP", "Java", "MySQL", "JavaScript"];

function skils(v){
    
    if(habilidade.indexOf(v) === -1){   //indexOf trazendo o índice do vetor
        return console.log(false);
    }  
    else if(habilidade.indexOf(v) > -1){
        return console.log(true);
    }
}

skils("JavaScript");