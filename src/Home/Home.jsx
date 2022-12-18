import {useState, useEffect, useCallback} from 'react';
import {Button, FormControl, TextField, Typography} from "@material-ui/core";
import {useStyles} from './styles';
import axios from 'axios';
import { useNavigate } from "react-router";


export const Home = () => {
    const [lat, setLat] = useState(localStorage.getItem('latitude') ? JSON.parse(localStorage.getItem('latitude')) : '');
    const [long, setLong] = useState(localStorage.getItem('longitude') ? JSON.parse(localStorage.getItem('longitude')) : '');
    const [data, setData] = useState(localStorage.getItem('currentData') ? localStorage.getItem('currentData') : []);
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const classes = useStyles();
    const key = process.env.WEATHER_APP_API_KEY;
    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        localStorage.setItem('latitude', JSON.stringify(lat));
        localStorage.setItem('longitude', JSON.stringify(long));
    });

    const currentLocationData = (data) => {
        const temp = data.current.temp_f;
        const condition = data.current.condition.text;
        const icon = data.current.condition.icon;
        const basicArray = [temp, condition, icon];
        setName(data.current.name);
        setData(basicArray);

    }

    const currentLocation = async () => {
        const response = await axios(`http://api.weatherapi.com/v1/current.json?key=371a085f9e6d4693905205107221312&q=${lat},${long}`)
        currentLocationData(response.data)
    }

    useEffect(() => {
        currentLocation();
    },[])

    return(
        <div>
            <FormControl className={classes.header}>
                <Typography className={classes.headerText}>Home</Typography>
            </FormControl>

            <FormControl className={classes.buttonBox}>
                <Button className={classes.button} onClick={() => navigate('/Profile')}>
                    Profile
                </Button>
                <Button className={classes.button} onClick={() => navigate('/Search')}>
                    Search
                </Button>
            </FormControl>

            <FormControl className={classes.infoBox}>
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    {data[0]}
                </Typography>
                <Typography>
                    {data[1]}
                </Typography>
                <img src={data[2]} />

            </FormControl>


        </div>
    )
}