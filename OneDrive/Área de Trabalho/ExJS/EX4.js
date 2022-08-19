/*4º exercício

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é: 

// De 0-1 ano: Junior
// De 1-3 anos: Pleno
// De 3-6 anos: Senior
// De 7 acima: Grão Mestre Jedi

*/

function experiente(n){
    if(n >= 0 && n < 1){
        return console.log("Junior");
    }
    else if(n >= 1 && n < 3){
        return console.log("Pleno");
    } 
    else if(n >= 3 && n <= 6){
        return console.log("Senior");
    }
    else if(n >= 7){
        return console.log("Grão Mestre Jedi");
    }
}

experiente(0);