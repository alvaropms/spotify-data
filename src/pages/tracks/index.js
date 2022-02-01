import React, { useState, useEffect } from "react";
import { Container, Icon } from "react-materialize";
import PageTitle from "../../components/PageTitle";
import MusicInfoContainer from "../../components/MusicInfoContainer";
import Grid from '../../components/Grid';
import API from '../../utilities/api';
import { useNavigate } from "react-router-dom";
import { isLogged } from "../../utilities/auth";

const Tracks = () => {
    const [response, setResponse] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        API.get('https://api.spotify.com/v1/me/top/tracks').then(
            res => {console.log(res.data.items);setResponse(res.data.items)}
        )
    }, [])

    useEffect(()=>{
        if(!isLogged()){
            navigate('/');
        }
    });

    return(
        <>
        <Container>
            <PageTitle title={<>Suas músicas favoritas no Spotify&nbsp;<Icon className="material-icons-outlined" style={{'color':'blue'}} medium>headset</Icon></>}/>
            <Grid>
                {
                    response.map(music => (
                        <MusicInfoContainer key={music.id} music={music}/>
                    ))
                }
            </Grid>
        </Container>
        </>
    );
}

export default Tracks;