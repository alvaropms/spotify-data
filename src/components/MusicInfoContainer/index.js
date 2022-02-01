import React from "react";
import { CardTitle } from "react-materialize";
import { StyledCard } from "./styles";

const MusicInfoContainer = (props) => {

    return(
        <>
        <StyledCard
        title={props.music.name+ ' - '+ props.music.artists[0].name}
            header={<CardTitle image={props.music.album.images[0].url} />}
            horizontal
        >
            {props.music.album.name}
        </StyledCard>
        </>
    );
}

export default MusicInfoContainer;