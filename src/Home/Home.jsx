import {useState, useEffect, useCallback} from 'react';
import {Button, TextField, Typography} from "@material-ui/core";
import {useStyles} from './styles';
import axios from 'axios';
import { useNavigate } from "react-router";


export const Home = () => {
    const [lat, setLat] = useState(localStorage.getItem('latitude') ? JSON.parse(localStorage.getItem('latitude')) : '');
    const [long, setLong] = useState(localStorage.getItem('longitude') ? JSON.parse(localStorage.getItem('longitude')) : '');
    const [data, setData] = useState(localStorage.getItem('currentData') ? localStorage.getItem('currentData') : []);
    const [name, setName] = useState('')
    const navigate = useNavigate();
    const styles = useStyles();
    const key = process.env.WEATHER_APP_API_KEY;
    // navigator.geolocation.getCurrentPosition((position) => {
    //     setLat(position.coords.latitude);
    //     setLong(position.coords.longitude);
    //     localStorage.setItem('latitude', JSON.stringify(lat));
    //     localStorage.setItem('longitude', JSON.stringify(long));
    // });

    return(
        <div>
            <Typography>
                Sign Up
            </Typography>

            <Typography>
                {lat}
            </Typography>
            <Typography>
                {long}
            </Typography>
            {data ? (
                <p>{name}</p>
            ) : ''}
            <Button onClick={() => navigate('/Profile')}>
                Profile
            </Button>
            <Button onClick={() => navigate('/Search')}>
                Begin Searching
            </Button>

        </div>
    )
}