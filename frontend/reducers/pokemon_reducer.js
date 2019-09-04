import { RECEIVE_ALL_POKEMON , RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, state, action.pokemon);
    case RECEIVE_SINGLE_POKEMON:
      pokemon = action.payload.pokemon;
      return Object.assign({}, state, { [poke.id]: poke });
    default:
      return state;
  }
};