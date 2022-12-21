import { useState, useEffect, useCallback } from 'react';
import {
  Button, Typography, CardContent, Box, Card, FormControl,
} from '@material-ui/core';
import { useNavigate } from 'react-router';
import axios from 'axios';
import OpacityIcon from '@mui/icons-material/Opacity';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { useStyles } from './styles';

export function Home() {
  const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {};
  const [savedCityData, setSavedCityData] = useState([]);
  const [guestStatus, setGuestStatus] = useState(JSON.parse(localStorage.getItem('guestStatus')));
  const classes = useStyles();
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const getCityForecasts = useCallback(() => {
    if (!guestStatus) {
      currentForecasts();
    }
  }, []);

  const currentForecasts = async () => {
    const userCities = [];
    const savedUserCities = userData.savedCities;
    for (let i = 0; i < savedUserCities.length; i++) {
      const response = await axios(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${savedUserCities[i]}`);
      userCities.push({
        name: userData.savedCities[i],
        temp: response.data.current.temp_f,
        condition: response.data.current.condition.text,
        icon: response.data.current.condition.icon,
        humid: response.data.current.humidity,
        tempHigh: response.data.forecast.forecastday[0].day.maxtemp_f,
        tempLow: response.data.forecast.forecastday[0].day.mintemp_f,
      });
    }
    setSavedCityData(userCities);
  };

  useEffect(() => {
    getCityForecasts();
  }, [getCityForecasts]);

  return (
    <div>
      <FormControl className={classes.header}>
        <Typography className={classes.headerText}>Home</Typography>
      </FormControl>

      <FormControl className={classes.buttonBox}>
        <Button className={classes.button} variant="contained" color="primary" onClick={() => navigate('/Search')}>
          Search
        </Button>
      </FormControl>
      <Typography className={classes.underline}>Saved Locations</Typography>
      {savedCityData.length > 0 && !guestStatus
        ? (

        <Box className={classes.scrollBox}>
              {savedCityData.map((item, index) => (
                <Card className={classes.cardContainerHome} key={index}>
                  <CardContent>
                    <Typography className={classes.title}>
                      {item.name}
                    </Typography>
                        <Box className={classes.conditionBox}>
                          <img className={classes.img} src={item.icon} alt={item.condition} />
                          <Typography className={classes.tempText}>
                            {item.temp}F°
                          </Typography>
                            </Box>


                    <Box className={classes.dataBox}>
                        <Typography className={classes.centerText}>
                              <OpacityIcon />
                              {item.humid}%
                        </Typography>
                        <Typography className={classes.centerText}>
                              <NorthIcon />
                              {item.tempHigh}F°
                        </Typography>
                        <Typography className={classes.centerText}>
                              <SouthIcon />
                              {item.tempLow}F°
                        </Typography>
                    </Box>
                      </CardContent>
                  </Card>
              ))}
        </Box>
        )

        : !guestStatus
          ? <Typography className={classes.largeText}>Looks like you haven't saved any locations yet </Typography>

          : <Typography className={classes.largeText}>You need to Login to use this feature</Typography>}

    </div>
  );
}
