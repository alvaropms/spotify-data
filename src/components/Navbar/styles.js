import { Navbar } from "react-materialize";
import styled from "styled-components";

export const Nav = styled(Navbar)`
    background-color: var(--black);
`;

export const Logo = styled.a`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.4em !important;

    @media (min-width: 993px) {
        margin-left: 10px;
    }
`;

export const Dflex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    color: var(--red);

    span{
        margin-right: 5px;
    }
`;