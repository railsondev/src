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
      esconderCartaoPokedev();

      // PASSO 4 - Ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
      const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

      // PASSO 5 - Remover a classe ativo que marca o pokedev selecionado na listagem
      destivarPokedevNaListagem();

      // PASSO 6 - Adicinar a classe ativo no pokedev selecionado na listagem
      AtivarPokedevSelecionadoNaListagem(idPokedevSelecionado);
   })
})

function AtivarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
   const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
   pokedevSelecionadoNaListagem.classList.add('ativo');
}

function destivarPokedevNaListagem() {
   const pokedevAtivoNaListagem = document.querySelector('.ativo');
   pokedevAtivoNaListagem.classList.remove('ativo');
}

function mostrarCartaoPokedevSelecionado(pokedev) {
   const idPokedevSelecionado = pokedev.attributes.id.value;
   const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
   const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
   cartaoPokedevParaAbrir.classList.add('aberto');
   return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
   const cartaoPokedevAberto = document.querySelector('.aberto');
   cartaoPokedevAberto.classList.remove('aberto');
}
