import React from "react";
import { StyledFooter } from "./styles";

const MyFooter = () => {
    return(
        <>
        <StyledFooter
            copyrights="Criado por alvaropms"
            links={<ul>
                    <li><a href="https://github.com/alvaropms/spotify-data">Repositório deste projeto</a></li>
                    <li><a href="https://developer.spotify.com/">Spotify para desenvolvedores</a></li>
                    <li><a href="https://pt-br.reactjs.org/">React</a></li>
                </ul>}
            moreLinks={<a className="right" href="https://github.com/alvaropms">Obrigado pela visita!</a>}
        >
            <h5>
                Spotify-Data
            </h5>
            <p>
            Projeto desenvolvido como forma de aprendizado usando a API do Spotify, 
            com React e o auxílio de bibliotecas como redux e axios.
            </p>
        </StyledFooter>
        </>
    );
}

export default MyFooter;