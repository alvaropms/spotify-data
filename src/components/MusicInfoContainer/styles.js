import { Card } from "react-materialize";
import styled from "styled-components";

export const StyledCard = styled(Card)`
    max-width: 300px;
    margin: 5px;
    background-color: var(--light-green);

    border-radius: 10px;

    img{
        height: 100%;
        width: 100px;
        border-radius: 10px 0px 0px 10px !important;
    }

    .card-content{
        padding: 10px !important;
    }

    .card-title{
        font-size: 1em;
        line-height: initial !important;
        font-weight: bold;
    }
`;