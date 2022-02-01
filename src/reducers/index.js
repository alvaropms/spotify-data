import { nameReducer } from './nameReducer';
import { combineReducers } from 'redux';
import{ hourReducer} from './hourReducer';
import { loadReducer } from './loadReducer';


export const Reducers = combineReducers({
  profileState: nameReducer,
  hourState: hourReducer,
  loadState: loadReducer
});