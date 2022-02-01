import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLogged, login } from '../../utilities/auth';
import {Center} from './styles';
import { Button } from 'react-materialize';
import { backURL } from '../../utilities/api';
import PageTitle from '../../components/PageTitle';
const logoSpotify = require('../../assets/logospotify.png');

const Login = (props) => {

  const getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  
  const obj = getHashParams();
  login(obj.access_token);

  let navigate = useNavigate();

  useEffect(()=>{

    if(isLogged()){
      navigate('/home');
    }
  }, [navigate]);

  return (
    <Center>
        <PageTitle title={<>Seja bem vindo ao Spotify-Data&nbsp; <img src={logoSpotify} height={55} alt='Spotify-logo'/></>}/>
        <Button style={{'backgroundColor': 'var(--green)'}} node="a" href={backURL+'/login'}>Logar com Spotify</Button>
        <p>
          Este não é um site oficial do Spotify, confira
          o repositório deste projeto no GitHub
          clicando <a href='https://github.com/alvaropms/spotify-data'>aqui</a>
        </p>
    </Center>
  );
}

export default Login;
