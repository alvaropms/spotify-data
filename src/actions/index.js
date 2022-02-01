import { UPDATE_NAME } from "./actionsType";
import { UPDATE_HOUR } from "./actionsType";
import { UPDATE_LOAD } from "./actionsType";

export const updateName = value => ({
    type: UPDATE_NAME,
    name: value
});

export const updateHour = value => ({
    type: UPDATE_HOUR,
    hour: value
});

export const updateLoad = value => ({
    type: UPDATE_LOAD,
    load: value
});