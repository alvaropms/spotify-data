import { Navbar } from "react-materialize";
import styled from "styled-components";

export const Nav = styled(Navbar)`
    background-color: var(--contrast);
`;

export const Logo = styled.a`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.4em !important;

    display: flex !important;
    flex-direction: row;
    align-items: center;

    img{
        margin-left: 5px;
    }

    @media (min-width: 993px) {
        margin-left: 10px;
    }
`;

export const Dflex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    

    span{
        color: var(--red);
        margin-right: 5px;
    }

    i{
        color: var(--red);
    }
`;