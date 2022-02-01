import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { isLogged } from '../../utilities/auth';
import API from '../../utilities/api';
import Grid from "../../components/Grid";
import ArtistContainer from "../../components/ArtistInfoContainer";
import { Container, Icon } from "react-materialize";
import PageTitle from "../../components/PageTitle";


const Artists = () => {
    const [response, setResponse] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        if(!isLogged()){
            navigate('/');
        }
    });

    useEffect(() => {
        API.get('https://api.spotify.com/v1/me/top/artists').then(
            res => setResponse(res.data.items)
        )
    }, [])

    return(
        <>
        <Container>
            <PageTitle title={<>Seus artistas favoritos no Spotify&nbsp;<Icon className="material-icons-outlined" style={{'color':'yellow'}} medium>auto_awesome</Icon></>}/>
            <Grid>
                {
                    response.map( artist => (
                        <ArtistContainer key={artist.id} artist={artist}/>
                    ))
                }
            </Grid>
        </Container>
        </>
    );
}

export default Artists;