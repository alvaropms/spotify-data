import {UPDATE_HOUR} from '../actions/actionsType';

const initialState = {
    hour: ''
};

export const hourReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_HOUR:
            return {
                ...state,
                hour: action.hour
            };
        default:
            return state;
}
};