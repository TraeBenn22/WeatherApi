import {useState, useEffect} from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import {Results} from "../Results/Results";
import {useStyles} from './styles'
import axios from "axios";
export const Search = () => {
    const [city, setCity] = useState('');
    const [data, setData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [type, setType] = useState('');
    const classes = useStyles();
    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const currentData = (data) => {
        const name = data.location.name;
        const temp = data.current.temp_f;
        const condition = data.current.condition.text;
        const basicArray = [name, temp, condition];
        setCityData(basicArray);
    }

    const  weeklyData = (data) => {
        const weekArr = [];
        data.forecast.forecastday.map((current, index) => {
            const date = current.date;
            const avgTemp = current.day.avetemp_f;
            const high = current.day.maxtemp_f;
            const low = current.day.mintemp_f;
            const avgHumid = current.day.avghumidity;
            const condition = current.day.condition.text;
            weekArr.push({date: date, temp: avgTemp, tempHigh: high, tempLow: low, humid: avgHumid, cond: condition})
            setCityData(weekArr);
        })
    }

    const weeklyForecast = async () => {
        setType('Weekly');
        const response = await axios(`http://api.weatherapi.com/v1/forecast.json?key=371a085f9e6d4693905205107221312&q=${city}&days=7`)
        weeklyData(response.data);
    }

    const currentForecast = async () => {
        setType('Current');
        const response = await axios(`http://api.weatherapi.com/v1/current.json?key=371a085f9e6d4693905205107221312&q=${city}`)

        currentData(response.data)
    }


    useEffect(() => {
        },[])

    return(
        <div >
            <Typography>
                Enter a City below
            </Typography>
            <TextField id="City" label="City" variant="outlined" value={city} onChange={(e) => handleChange(e)}>

            </TextField>
           <Button onClick={currentForecast}>
                Basic Weather Data
           </Button>
            <Button onClick={weeklyForecast}>
                Weekly Forecast
            </Button>
            <div className={cityData.length > 0 ? classes.results : classes.hidden}>
                <Results currentData={cityData} type={type} />
            </div>


        </div>
    )
}