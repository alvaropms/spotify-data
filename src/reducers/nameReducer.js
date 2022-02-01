import {UPDATE_NAME} from '../actions/actionsType';

const initialState = {
    name: ''
};

export const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
}
};