import styled from "styled-components";

export const StyledP = styled.p`
    text-align: ${props => props.center ? 'center' : 'justify'};
    margin-bottom: 24px;

    @media (min-width: 600px) {
        max-width: ${props => `${props.maxWidth}px`};
        --midWidth: ${props => props.maxWidth / 2 +'px'};
        margin-left: ${props => props.maxWidth && props.center ? `calc(50% - var(--midWidth))` : ''};
    }


    li{
        margin: 10px 0px;
    }
`;

export const StyledDiv = styled.div`

    img{
        width: 100%;
    }
`;