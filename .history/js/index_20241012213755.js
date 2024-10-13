/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
   e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - Precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - Remover a classe aberto só do cartão que tá aberto
       PASSO 4 - Ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
    cartão abrir
       PASSO 5 - Remover a classe ativo que marca o pokedev selecionado na listagem
       PASSO 6 - Adicinar a classe ativo no pokedev selecionado na listagem
*/

// PASSO 1 - Precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs

const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');
console.log(listaSelecaoPokedevs);

// PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {
  pokedev.addEventListener('click', () => {
    
    // PASSO 3 - Remover a classe aberto só do cartão que tá aberto
    const cartaoPokedevAberto = document.querySelector('.aberto');
    cartaoPokedevAberto.classList.remove('aberto');
    
    // PASSO 4 - Ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + 
    const cartaoPokedevParaAbrir =
  })
})



// PASSO 5 - Remover a classe ativo que marca o pokedev selecionado na listagem
// PASSO 6 - Adicinar a classe ativo no pokedev selecionado na listagem