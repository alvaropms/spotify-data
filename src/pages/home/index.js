import React,{useEffect} from "react";
import { Container, Icon } from "react-materialize";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { isLogged } from "../../utilities/auth";
import { StyledP } from "./styles";
const artistsImg = require('../../assets/artists.png');
const tracksImg = require('../../assets/tracks.png');

const Home = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isLogged()){
            navigate('/');
        }
    });

    return (
        <>
        <Container>
            <PageTitle title={<>Spotify-Data&nbsp;<Icon className="material-icons-outlined" style={{'color':'var(--green)'}} medium>emoji_emotions</Icon></>}/>
            <StyledP center maxWidth={400}>
                Projeto desenvolvido como forma de aprendizado usando a API do Spotify, com React e o auxílio de bibliotecas como redux e axios.
            </StyledP>
            <h5>Sobre a aplicação:</h5>
            <StyledP>
                Com esta aplicação, qualquer usuário poderá alguns conferir dados da sua conta
                e de seu uso do serviço de streaming de música Spotify.
                <div>
                    <img src={artistsImg} alt='Seus artistas favoritos!' height={400}/>
                    <img src={tracksImg} alt='Suas músicas favoritas!' height={400}/>
                </div>
            </StyledP>
            <h5>O que foi aprendido:</h5>
            <StyledP>
            <ul>
                <li><b>Redux:</b> biblioteca para ajudar a gerenciar e compartilhar informações do aplicativo entre diversos componentes de uma vez.</li>
                <li><b>Reac-materialize:</b> biblioteca que traz o framework css, materialize, para o react. Tudo em forma de componentes.</li>
                <li><b>Axios:</b> biblioteca que fornece um cliente HTTP para que possamos realizar a comunicação com uma API externa.</li>
                <li><b>Uso de API externa:</b> estabelecer comunicação com uma API externa que funciona como a fonte de informações do aplicativo, além de tratar estes dados para que sejam exibidos corretamente para o usuário</li>
            </ul>
            </StyledP>
        </Container>
        </>
    );
}

export default Home;