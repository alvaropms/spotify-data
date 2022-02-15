import React, { useEffect } from "react";
import { Container, Icon } from "react-materialize";
import PageTitle from "../../components/PageTitle";
import MusicInfoContainer from "../../components/MusicInfoContainer";
import Grid from '../../components/Grid';
import API from '../../utilities/api';
import { useNavigate } from "react-router-dom";
import { isLogged } from "../../utilities/auth";
import { useQuery } from "react-query";

const Tracks = () => {
    const navigate = useNavigate()
    const {data} = useQuery('get_artists', () =>
        API.get('tracks').then(
            res => res.data.items
        )
    )

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
                    data?.map(music => (
                        <MusicInfoContainer key={music.id} music={music}/>
                    ))
                }
            </Grid>
        </Container>
        </>
    );
}

export default Tracks;