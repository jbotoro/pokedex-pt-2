
export const selectAllPokemon = (state) => (
    Object.values(state.entities.pokemon)
)

export const selectPokemonItems = (state, pokemon) => {
    return pokemon ? pokemon.item_ids.map(id => state.entities.items[id]) : [];
}