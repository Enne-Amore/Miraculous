/* 
    OBJETIVO 1 - quando passar o mouse em cima da personagem na listagem, devemos selecioná-la
            passo 1 - pegar as personagens no JS pra poder verificar quando o usuário passar o mouse em cima de uma delas
            passo 2 - adicionar a classe selecionado na personagem que a usuária passar o cursor do mouse
            passo 3 - verificar se já exista uma personagem selecionada, se sim, devemos remover a seleção dela 

    OBJETIVO 2 - quando passar o mouse em cima da personagem na listagem, trocar a imagem, o nome e a descrição da personagem grande
            passo 1 - pegar o elemento da personagem grande pra adicionar as informações nela
            passo 2 - alterar a imagem da personagem grande
            passo 3 - alterar o nome da personagem grande
            passo 4 - alterar a descrição da personagem grande
*/

/*
    OBJETIVO 1 - quando passar o mouse em cima da personagem na listagem, devemos selecioná-la
            passo 1 - pegar as personagens no JS pra poder verificar quando o usuário passar o mouse em cima de uma delas
*/
const personagens = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionado na personagem que a usuária passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já exista uma personagem selecionada, se sim, devemos remover a seleção dela 
        removerSelecaoDaPersonagem();

        personagem.classList.add('selecionada');

        // OBJETIVO 2 - quando passar o mouse em cima da personagem na listagem, trocar a imagem, o nome e a descrição da personagem grande
        alterarImagemDaPersonagemSelecionada(personagem);

        // passo 3 - alterar o nome da personagem grande
        alterarNomeDaPersonagem(personagem);

        // passo 4 - alterar a descrição da personagem grande
        alterarDescricaoDaPersonagem(personagem);
    })
})

function removerSelecaoDaPersonagem() {
    const personagemSelecionada = document.querySelector('.selecionada');
    personagemSelecionada.classList.remove('selecionada');
}

function alterarImagemDaPersonagemSelecionada(personagem) {
    //     passo 1 - pegar o elemento da personagem grande pra adicionar as informações nela
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    // passo 2 - alterar a imagem da personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./personagens\ miraculous/${idPersonagem}.jpg`;
}

function alterarNomeDaPersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-de-personagem');
    nomePersonagem.innerHTML = personagem.getAttribute('data-name');
}

function alterarDescricaoDaPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-de-personagem');
    descricaoPersonagem.innerHTML = personagem.getAttribute('data-description');
}

