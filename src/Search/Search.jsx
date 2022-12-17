import {useState, useEffect, lazy} from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import {useStyles} from './styles'
import axios from "axios";
import {Results} from "../Results/Results";
export const Search = () => {
    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState([]);
    const [searchType, setSearchType] = useState('')
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


    /** //
     * future function to be converted to if given time for stretch goals
     */
    // const getWeatherData = async (event) => {
    //     setSearchType(event.target.id);
    //     const response = await axios(`http://api.weatherapi.com/v1/${searchType}.json?key=371a085f9e6d4693905205107221312&q=${city}`)
    //     searchType === 'current' ? currentData(response.data) : weeklyData(response.data);
    // }




    return(
        <div >
            <Typography>
                Enter a City below
            </Typography>
            <TextField id="City" label="City" variant="outlined" value={city} onChange={(e) => handleChange(e)}>

            </TextField>
           <Button id='current' onClick={currentForecast}>
                Basic Weather Data
           </Button>
            <Button id='forecast' onClick={weeklyForecast}>
                Weekly Forecast
            </Button>

                <Results data={cityData} type={type}/>



        </div>
    )
}