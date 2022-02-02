import axios from "axios";
import { getToken, logout } from "./auth";
import { Store } from "../store/index";
import { UPDATE_LOAD } from "../actions/actionsType";

export const backURL = 'http://localhost:8888'//'https://spotify-data-auth.herokuapp.com';

const API = axios.create({
    
});

API.interceptors.request.use(request => {
  request.headers = {
    'Authorization' : 'Bearer '+getToken()
  }

  Store.dispatch({type: UPDATE_LOAD, load: true});

  return request;
})

API.interceptors.response.use( response => {
  Store.dispatch({type: UPDATE_LOAD, load: false});
  
  return response
  
}, error => {
  Store.dispatch({type: UPDATE_LOAD, load: false});
  if(error.response.status === 401){
    logout();
  }

  return Promise.reject(error);
})



export default API;