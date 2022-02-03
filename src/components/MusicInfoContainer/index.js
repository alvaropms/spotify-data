import React from "react";
import { StyledIframe } from "./styles";

const MusicInfoContainer = (props) => {

    return(
        <>
        <StyledIframe src={`https://open.spotify.com/embed/track/${props.music.id}`}
        width="300" height="80" frameborder="0" allowtransparency="true"
        allow="encrypted-media"></StyledIframe>
        </>
    );
}

export default MusicInfoContainer;