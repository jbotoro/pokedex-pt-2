import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

export const itemsReducer = (state = {}, action) => {
    Object.freeze(state);

    let items;

    switch (action.type) {
        case RECEIVE_SINGLE_POKEMON:
            items = action.payload.items;
            return Object.assign({}, state, items)
        default:
            return state;
    }
};