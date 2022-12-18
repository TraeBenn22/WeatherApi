import {useState, useEffect, lazy, Suspense} from "react";
import {Button, FormControl, Modal, Box, TextField, Typography} from "@material-ui/core";
import {useStyles} from './styles'
import axios from "axios";
import DatePicker from "react-datepicker";
export const Search = () => {
    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState([]);
    const [searchType, setSearchType] = useState('');
    const [historyModal, setHistoryModal] =useState(false);
    const [type, setType] = useState('');
    const [date, setDate] = useState(new Date());
    const classes = useStyles();
    const handleChange = (event) => {
        setCity(event.target.value);
    }
    const Results = lazy(() => import('../Results/Results'));

    /**
     * function that formats the response data for the current single day in an array
     * @param data response data from API
     */
    const currentData = (data) => {
        const temp = data.current.temp_f;
        const condition = data.current.condition.text;
        const icon = data.current.condition.icon;
        const basicArray = [temp, condition, icon];
        setCityData(basicArray);

    }

    /**
     * function that formats the response data to an array that is updated in cityData
     * @param data the response from the API
     */

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
    /**
     * Function returns 400 bad request because this API call is not part of the free plan
     * @returns {Promise<void>}
     */
    const historicalForecast = async () => {
        setType('Historical');
        const response = await axios(`http://api.weatherapi.com/v1/history.json?key=371a085f9e6d4693905205107221312&q=${city}&dt=${date}`)
        currentData(response.data);
    }

    /**
     * function that gets weekly foracast data from API to me managed with weeklyData
     * @returns {Promise<void>}
     */
    const weeklyForecast = async () => {
        setType('Weekly');
        const response = await axios(`http://api.weatherapi.com/v1/forecast.json?key=371a085f9e6d4693905205107221312&q=${city}&days=7`)
        weeklyData(response.data);
    }

    /**
     * function returns data for current day to be managed by currentData
     * @returns {Promise<void>}
     */
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
                <Button className={classes.button} id='historical' onClick={(e) => setHistoryModal(true)} >Access Weather History</Button>
            </FormControl>
            <Modal open={historyModal} onClose={(e) => setHistoryModal(false)}>
                <Box className={classes.modal}>
                    Pick a date
                    <Button className={classes.button} id='searchHistorical' onClick={historicalForecast}>Search Date</Button>
                    <DatePicker  selected={date} onChange={(date) => setDate(date)}/>
                </Box>
            </Modal>

            <Suspense fallback={<div>Loading....</div>}>
                <Results data={cityData} type={type} city={city} />
            </Suspense>



        </div>
    )
}