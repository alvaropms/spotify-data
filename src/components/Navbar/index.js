import React from "react";
import { Nav, Logo, Dflex } from "./styles";
import { Icon, NavItem } from "react-materialize";
import { logout } from "../../utilities/auth";
const logo = require('../../assets/logospotify.png');

const NavbarComponent = (props) => {

    return(
        <Nav
        fixed
        alignLinks="right"
            brand={<Logo href='/home' className="brand-logo">
              <div>
                Spotify-Data
              </div>
              <img alt="logo" src={logo} height={40}/>
              </Logo>}
        >
            <NavItem href="/home">
               Sobre o projeto
            </NavItem>
            <NavItem href="/artists">
               Artistas favoritos
            </NavItem>
            <NavItem href="/tracks">
               Músicas favoritas
            </NavItem>
            <NavItem href="/" onClick={() => logout()}>
                <Dflex>
                    <span>Sair</span>
                    <Icon>logout</Icon>
                </Dflex>
            </NavItem>
        </Nav>
    );
}

export default NavbarComponent;