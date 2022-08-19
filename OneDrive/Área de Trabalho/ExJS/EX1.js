/*1º exercício

Crie uma função com o objeto abaixo que retorne o seguinte conteúdo: O usuário mora em Cuiabá / MT, no bairro Jardim cuiabá, na Av do CPA, nº 1293.*/ 

//OBJ
const endereco = {
    cidade: "Cuiabá/MT",
    bairro: "Jardim cuiabá",
    rua: "Av do CPA",
    nmr: 1293
};

function dados(){
    console.log(`O usuário mora em ${endereco.cidade}, no bairro ${endereco.bairro}, na ${endereco.rua}, ${endereco.nmr}`);
}

dados();