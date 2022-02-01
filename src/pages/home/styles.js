import styled from "styled-components";

export const StyledP = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: ${props => props.center ? 'center' : 'justify'};
    margin-bottom: 24px;

    max-width: ${props => `${props.maxWidth}px`};
    margin-left: ${props => props.maxWidth && props.center ? 'calc(50% - 200px)' : ''};
    img{
        margin-top: 20px;
    }
`;