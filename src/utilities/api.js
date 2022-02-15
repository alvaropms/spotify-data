import axios from "axios";
import { getToken, logout } from "./auth";
import { Store } from "../store/index";
import { UPDATE_LOAD } from "../actions/actionsType";
import { QueryClient } from "react-query";

export const backURL = 'https://spotify-data-auth.herokuapp.com';

const API = axios.create({
    baseURL: 'https://api.spotify.com/v1/me/top'
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

export const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      refetchOnReconnect: false,
      refetchOnMount: false
    }
}
});



export default API;