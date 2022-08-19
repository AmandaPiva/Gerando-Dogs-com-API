/*5º exercício

Dado o seguinte vetor de objetos: */

var usuarios = [{
    nome: "Douglas",
    habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
    nome: "Elton",
    habilidades:    ["PHP", "Ruby on Rails", "Laravel"]
}
];

/* Escreva uma função que retorne o seguinte resultado:
O Douglas possui as habilidades: Javascript, ReactJS, Redux
O Elton possui as habilidades: PHP, Ruby on Rails, Laravel*/

function dados(){
        for(let i = 0; i < usuarios.length; i++){
            console.log(`O ${usuarios[i].nome} possui as habilidades: ${usuarios[i].habilidades}`);
        }
}

dados();