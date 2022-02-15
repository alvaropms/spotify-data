import React from "react";
import { Nav, Logo, Dflex } from "./styles";
import { Icon, NavItem } from "react-materialize";
import { logout } from "../../utilities/auth";
import { Link } from "react-router-dom";
const logo = require('../../assets/logospotify.png');

const NavbarComponent = (props) => {

    return(
        <Nav
        fixed
        alignLinks="right"
            brand={<Logo to={'/home'} className="brand-logo">
              <div>
                Spotify-Data
              </div>
              <img alt="logo" src={logo} height={40}/>
              </Logo>}
        >
                <Link to={'/home'}>
                    <NavItem className="sidenav-close">
                    Sobre o projeto
                    </NavItem>
                </Link>
                <Link to={'/artists'}>
                    <NavItem className="sidenav-close">
                    Artistas favoritos
                    </NavItem>
                </Link>
                <Link to={'/tracks'}>
                    <NavItem className="sidenav-close">
                    Músicas favoritas
                    </NavItem>
                </Link>
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