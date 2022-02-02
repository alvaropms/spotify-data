import React, {useEffect, useState} from "react";
import { Nav, Logo, Dflex } from "./styles";
import { Icon, NavItem } from "react-materialize";
import { logout } from "../../utilities/auth";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import { updateName, updateHour } from "../../actions";
import { isLogged } from "../../utilities/auth";
import API from '../../utilities/api';

const NavbarComponent = (props) => {
    const {name, updateName, hour, updateHour} = props;
    const [message , setMessage] = useState('');

    useEffect(()=>{
        async function getName(){
          const res = await API.get('https://api.spotify.com/v1/me');
          updateName(res.data.display_name);
        }

        if(isLogged() && name === ''){
          getName();
        }
      }, [updateName, name]);

    useEffect(() => {
      const date = new Date();
      updateHour(date.getHours());
      if(hour >= 6 && hour < 12){
        setMessage(name !== '' ?'Bom dia, '+name : 'Bom dia');
      }else{
        if(hour >= 12 && hour < 18){
          setMessage(name !== '' ?'Boa tarde, '+name : 'Boa tarde');
        }else{
          setMessage(name !== '' ?'Boa noite, '+name : 'Boa noite');
        }
      }
    }, [hour, name, updateHour])

    return(
        <Nav
        fixed
        alignLinks="right"
            brand={<Logo href='/home' className="brand-logo">{message}</Logo>}
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

const mapStateToProps = store => ({
    name: store.profileState.name,
    hour: store.hourState.hour
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateName, updateHour }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);