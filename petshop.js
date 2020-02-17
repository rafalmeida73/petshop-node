let listaDePets = ['Bob', 'Menino', 'tico'];

const addPet = nome => {
    listaDePets.push(nome)
    return "Pet cadastrado com sucesso!";
};


function listarPets () {
    let conteudo = "";

    listaDePets.forEach(function (petNome) {
        conteudo += `
        -----------------------
        Nome do Pet: ${petNome}
        `
    })
    return conteudo;
}


module.exports = { listarPets };