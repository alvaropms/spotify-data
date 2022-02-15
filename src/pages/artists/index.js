import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { isLogged } from '../../utilities/auth';
import API from '../../utilities/api';
import Grid from "../../components/Grid";
import ArtistContainer from "../../components/ArtistInfoContainer";
import { Container, Icon } from "react-materialize";
import PageTitle from "../../components/PageTitle";
import { useQuery } from "react-query";


const Artists = () => {
    let navigate = useNavigate();

    const { data } = useQuery('get_artists', async () =>{
        const response = await API.get('artists')

        return response.data.items
    }
    )

    useEffect(()=>{
        if(!isLogged()){
            navigate('/');
        }
    });

    return(
        <>
        <Container>
            <PageTitle title={<>Seus artistas favoritos no Spotify&nbsp;<Icon className="material-icons-outlined" style={{'color':'yellow'}} medium>auto_awesome</Icon></>}/>
            <Grid>
                {
                    data?.map( artist => (
                        <ArtistContainer key={artist.id} artist={artist}/>
                    ))
                }
            </Grid>
        </Container>
        </>
    );
}

export default Artists;