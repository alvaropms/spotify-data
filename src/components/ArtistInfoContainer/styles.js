import { Card } from "react-materialize";
import styled from "styled-components";

export const ArtistInfoContainer = styled(Card)`
    margin: 10px;
    width: 160px;
    height: 262px;

    background-color: var(--principal);

    border-radius: 10px;
    border: 1px solid var(--text);

    .card-title{
        font-size: 1em;
        font-weight: bold;
        line-height: normal !important;
    }

    .card-content{
        padding: 10px;
    }

    img{
        height: 160px;
        width: 160px;
        border-radius: 10px 10px 0px 0px !important;
    }
`;

export const ArtistGenres = styled.span`
    font-size: 0.8em;
`;