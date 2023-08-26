// const pokemonDetailList = document.getElementById("pokemonDetailList");
const pokemonList2 = document.getElementById("substituirDetails");
const botaoDetalhe = document.getElementById("botaoDetails");
var idEscolhida;

botaoDetalhe.addEventListener("click", () => {
    idEscolhida = prompt("Digite o id do pokemon: ");
    loadPokemonItensDetails();
    
})


function convertPokemonDetailsToLi(pokemon){
    return `
        <li class ="pokemonDetalhado">
                <div class="fotoPokemon">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <ol class="statusBar">
                    <li class="nome">
                    Nome: ${pokemon.name}
                    </li>
                    <li class="altura">
                        Altura: ${pokemon.height}cm
                    </li>
                    <li class="peso">
                        Peso: ${pokemon.weight}g
                    </li>
                    <li class="baseXp">
                        XP inical = ${pokemon.baseExperience}
                    </li>
                </ol>
            </li>
    `
}

function loadPokemonItensDetails() {
    pokeApi.getPokemonsDetails(idEscolhida).then((pokemon) => {
        const newHtml = convertPokemonDetailsToLi(pokemon)
        pokemonList2.innerHTML = newHtml;
    })
}