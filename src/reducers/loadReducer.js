import {UPDATE_LOAD} from '../actions/actionsType';

const initialState = {
    load: false
};

export const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOAD:
            return {
                ...state,
                load: action.load
            };
        default:
            return state;
}
};