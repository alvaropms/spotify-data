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
                <Link className="sidenav-close" to={'/home'}>
                    Sobre o projeto
                </Link>
                <Link className="sidenav-close" to={'/artists'}>
                    Artistas favoritos
                </Link>
                <Link className="sidenav-close" to={'/tracks'}>
                    Músicas favoritas
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