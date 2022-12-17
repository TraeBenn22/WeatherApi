import {useState, useEffect, lazy} from "react";
import {Button, FormControl, TextField, Typography} from "@material-ui/core";
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
        const temp = data.current.temp_f;
        const condition = data.current.condition.text;
        const basicArray = [temp, condition];
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
            const icon = current.day.condition.icon;
            weekArr.push({date: date, temp: avgTemp, tempHigh: high, tempLow: low, humid: avgHumid, cond: condition, condIcon: icon})
            setCityData(weekArr);
        })
    }



    const weeklyForecast = async () => {
        setType('Weekly');
        const response = await axios(`http://api.weatherapi.com/v1/forecast.json?key=371a085f9e6d4693905205107221312&q=${city}&days=7`)
        weeklyData(response.data);
        console.log(response.data);
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
            <FormControl className={classes.header}>
                <TextField className={classes.text} id="city" label="City" variant="outlined" value={city} onChange={(e) => handleChange(e)}>

                </TextField>
            </FormControl>

            <FormControl className={classes.buttonBox}>
                <Button className={classes.button} id='current' onClick={currentForecast}>
                    Basic Weather Data
                </Button>
                <Button className={classes.button} id='forecast' onClick={weeklyForecast}>
                    Weekly Forecast
                </Button>
            </FormControl>


                <Results data={cityData} type={type} city={city} />



        </div>
    )
}