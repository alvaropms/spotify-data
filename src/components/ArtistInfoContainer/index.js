import React from "react";
import {ArtistInfoContainer, ArtistGenres} from './styles';
import { CardTitle } from "react-materialize";

const ArtistContainer = (props) => {
    return (
        <>
        <ArtistInfoContainer
            header={<CardTitle image={props.artist.images[0].url}></CardTitle>}
            title={props.artist.name}
            >    
            <ArtistGenres>
                { props.artist.genres[1] ?
                 props.artist.genres[0]+ ', '+ props.artist.genres[1] :
                 props.artist.genres[0]
                 }
            </ArtistGenres>
        </ArtistInfoContainer>
        </>
        
    );
}

export default ArtistContainer;