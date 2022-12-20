import {useState, useEffect, lazy, Suspense} from "react";
import {Button, FormControl, Modal, Box, TextField, Typography, InputAdornment} from "@material-ui/core";
import {useStyles} from './styles'
import axios from "axios";
import {Results} from '../Results/Results';
import SearchIcon from '@mui/icons-material/Search';
import DatePicker from "react-datepicker";
import LockPersonIcon from '@mui/icons-material/LockPerson';
export const Search = () => {
    const [userCity, setUserCity] = useState('');
    const [city, setCity] = useState('');
    const [forecastData, setForecastData] = useState([0]);
    const [historyModal, setHistoryModal] =useState(false);
    const [savingErrorModal , setSavingErrorModal] = useState(false);
    const [currentUserData, setCurrentUserData] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []);
    const [type, setType] = useState('');
    const [subscribeText, setSubscribeText] = useState(false);
    const [date, setDate] = useState(new Date());
    const [hours, setHours] = useState([]);
    const classes = useStyles();
    const handleChange = (event) => {
        setUserCity(event.target.value);
    }

    /**
     * function that formats the weekly forecast data from the API call
     * @param data response data returned from the API call
     */
    const  weeklyData = (data) => {
        const weekArr = [];
        setCity(data.location.name);
        data.forecast.forecastday.map((current, index) => {
            const date = current.date;
            const avgTemp = current.day.avgtemp_f;
            const high = current.day.maxtemp_f;
            const low = current.day.mintemp_f;
            const avgHumid = current.day.avghumidity;
            const condition = current.day.condition.text;
            const icon = current.day.condition.icon;
            weekArr.push({date: date, temp: avgTemp, tempHigh: high, tempLow: low, humid: avgHumid, cond: condition, condIcon: icon})
            setForecastData(weekArr);
        })


    }
    /**
     * function gets and stores 24 hours of weather data for the current day. past and future.
     * @param data response data returned from the API call
     */
    const getHours = (data) => {
        const allHours = [];
        data.forecast.forecastday[0].hour.map((item,index) => {
            const condition = item.condition.text;
            const condIcon = item.condition.icon;
            const humidity = item.humidity;
            const temp = item.temp_f;
            const time =  item.time.slice(11);
            const windSpd = item.wind_mph;
            allHours.push({condition: condition, condIcon: condIcon, humidity: humidity, temp: temp, time: time, windSpd: windSpd})
        })
        setHours(allHours);
    }
    /**
     * Function returns 400 bad request because this API call is not part of the free plan
     * @returns {Promise<void>}
     */
    const historicalForecast = async () => {
        setSubscribeText(true);
        const response = await axios(`http://api.weatherapi.com/v1/history.json?key=371a085f9e6d4693905205107221312&q=${userCity}&dt=${date}`);

    }



    const getData = async () => {
        const response = await axios(`http://api.weatherapi.com/v1/forecast.json?key=371a085f9e6d4693905205107221312&q=${userCity}&days=7`)
        weeklyData(response.data);
        getHours(response.data)

    }

    const saveToProfile = () => {
        const currentUser = forecastData;
        const nameSet = new Set();
        for (let i = 0; i < currentUserData.length; i++) {
            nameSet.add(currentUserData[i]);
        }
        if (nameSet.has(userCity)) {
            setSavingErrorModal(true);
        } else {
            currentUser.push(userCity);
            setCurrentUserData(currentUser);
            localStorage.setItem('user', JSON.stringify(currentUserData));
        }


    }
    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            getData();
        }
    }

    return(
        <div>
            <TextField className={classes.text} placeholder='Enter City or Zip Code' onKeyPress={handleKeyPress} id="city"  variant="outlined" value={userCity} onChange={ handleChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
            >
            </TextField>

            <FormControl className={classes.buttonBox}>
                <Button className={classes.button} variant='contained' color='primary' id='historical' onClick={(e) => setHistoryModal(true)}>
                    Historical Records
                </Button>
                <Button className={classes.button} variant='contained' color='primary' id ='save' onClick={saveToProfile}>Save Location</Button>
            </FormControl>
            <Modal open={historyModal} onClose={(e) => setHistoryModal(false)}>
                <Box className={classes.modal}>
                    <Typography className={classes.text}>Choose a date</Typography>
                    <FormControl className={classes.modalBottom}>
                        <Typography className={subscribeText ? classes.modalText : classes.hidden}>Become a Subscriber to unlock this feature</Typography>
                        <Button   className={classes.modalButton} id='searchHistorical' onClick={historicalForecast}>Search <LockPersonIcon /></Button>
                        <DatePicker className={classes.datePicker}  selected={date} onChange={(date) => setDate(date)}/>
                    </FormControl>

                </Box>
            </Modal>
            <Modal open={savingErrorModal} onClose={(e) => setSavingErrorModal(false)}>
                <Box className={classes.modal}>
                    Looks like you already have that city saved!
                </Box>
            </Modal>

            <Suspense fallback={<div>Loading....</div>}>
                <Results forecastData={forecastData} city={city} hours={hours} />
            </Suspense>
        </div>
    )
}