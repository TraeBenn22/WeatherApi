import { useState } from 'react';
import {
  Button, FormControl, Modal, Box, TextField, Typography, InputAdornment,
} from '@material-ui/core';
import { useNavigate } from 'react-router';
import axios from 'axios';
import {API_KEY} from "../config";
import SearchIcon from '@mui/icons-material/Search';
import DatePicker from 'react-datepicker';
import Alert from '@mui/material/Alert';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { Results } from '../Results/Results';
import { useStyles } from './styles';

export function Search() {
  const [userCity, setUserCity] = useState('');
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState([0]);
  const [historyModal, setHistoryModal] = useState(false);
  const [alertStatus, setAlertStatus] = useState(false);
  const guestStatus = JSON.parse(localStorage.getItem('guestStatus'));
  const [currentUserData, setCurrentUserData] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {});
  const [subscribeText, setSubscribeText] = useState(false);
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);
  const navigate = useNavigate();
  const classes = useStyles();
  const handleChange = (event) => {
    setUserCity(event.target.value);
  };
  /**
     * function that formats the weekly forecast data from the API call
     * @param data response data returned from the API call
     */
  const weeklyData = (data) => {
    const weekArr = [];
    setCity(data.location.name);
    data.forecast.forecastday.map((current, index) => {
      const { date } = current;
      const avgTemp = current.day.avgtemp_f;
      const high = current.day.maxtemp_f;
      const low = current.day.mintemp_f;
      const avgHumid = current.day.avghumidity;
      const condition = current.day.condition.text;
      const { icon } = current.day.condition;
      weekArr.push({
        date, temp: avgTemp, tempHigh: high, tempLow: low, humid: avgHumid, cond: condition, condIcon: icon,
      });
      setForecastData(weekArr);
    });
  };
  /**
     * function gets and stores 24 hours of weather data for the current day. past and future.
     * @param data response data returned from the API call
     */
  const getHours = (data) => {
    const allHours = [];
    data.forecast.forecastday[0].hour.map((item, index) => {
      const condition = item.condition.text;
      const condIcon = item.condition.icon;
      const { humidity } = item;
      const temp = item.temp_f;
      const time = item.time.slice(11);
      const windSpd = item.wind_mph;
      allHours.push({
        condition, condIcon, humidity, temp, time, windSpd,
      });
    });
    setHours(allHours);
  };
  /**
     * Function returns 400 bad request because this API call is not part of the free plan
     * @returns {Promise<void>}
     */
  const historicalForecast = async () => {
    setSubscribeText(true);
    const response = await axios(`http://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${userCity}&dt=${date}`);
  };

  /**
     * consolidates all of needed data from API with weeklyData and getHours during this call to be passed into Results Component
     * @returns {Promise<void>}
     */
  const getData = async () => {
    const response = await axios(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${userCity}&days=7`);
    weeklyData(response.data);
    getHours(response.data);
  };

  /**
     * function that saves the locations that are saved by user to local storage, for lookup later in Profile component
     */
  const saveToProfile = () => {
    const currentSavedCities = currentUserData.savedCities;
    const nameSet = new Set();
    for (let i = 0; i < currentUserData.savedCities.length; i++) {
      nameSet.add(currentUserData.savedCities[i]);
    }
    if (nameSet.has(userCity)) {
      setAlertStatus(true);
    } else {
      currentSavedCities.push(userCity);
      localStorage.setItem('userData', JSON.stringify({ username: currentUserData.username, password: currentUserData.password, savedCities: currentSavedCities }));
    }
  };
  /**
     * enables user to search location by pressing enter key
     * @param event the event of the key press in the search textfield
     */
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getData();
    }
  };

  return (
    <div>
      <TextField
        className={classes.text}
        placeholder="Enter City or Zip Code"
        onKeyPress={handleKeyPress}
        id="city"
        variant="outlined"
        value={userCity}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box className={alertStatus ? classes.alertBox : classes.hidden}>
        <Alert severity="warning" onClose={(e) => setAlertStatus(false)}>{`Looks like you already have ${userCity} saved!`}</Alert>
      </Box>
      <FormControl className={classes.buttonBox}>
        <Button className={classes.button} variant="contained" color="primary" onClick={(e) => navigate('/Home')}>Back to Home</Button>
        <Button className={classes.button} id="historical" disabled={guestStatus || userCity.length < 3} variant="contained" color="primary" onClick={(e) => setHistoryModal(true)}>
          Historical Records
        </Button>
        <Button className={classes.button} id="save" disabled={guestStatus || userCity.length < 3} variant="contained" color="primary" onClick={saveToProfile}>Save Location</Button>
      </FormControl>
      <Modal open={historyModal} onClose={(e) => setHistoryModal(false)}>
        <Box className={classes.modal}>
          <Typography className={classes.text}>Choose a date</Typography>
          <FormControl className={classes.modalBottom}>
            <Typography className={subscribeText ? classes.modalText : classes.hidden}>Become a Subscriber to unlock this feature</Typography>
            <Button className={classes.modalButton} id="searchHistorical" onClick={historicalForecast}>
              Search
<LockPersonIcon />
            </Button>
            <DatePicker className={classes.datePicker} selected={date} onChange={(date) => setDate(date)} />
          </FormControl>

        </Box>
      </Modal>
      <Results forecastData={forecastData} city={city} hours={hours} />
    </div>
  );
}
