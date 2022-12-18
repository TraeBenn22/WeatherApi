import {useState, useEffect, useCallback} from 'react';
import {Button, Typography, Grid, CardContent, Card} from "@material-ui/core";
import {useStyles} from './styles';
import {Navigate, useNavigate} from "react-router";
import axios from "axios";

export const Profile = () => {
    const [userData, setUserData] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []);
    const [savedCityData, setSavedCityData] = useState([]);
    const classes = useStyles();
    const navigate = useNavigate();
    const currentForecast = async () => {
        const userDataArray = [];
        for(let i = 0; i < userData.length ; i++) {
            const response = await axios(`http://api.weatherapi.com/v1/current.json?key=371a085f9e6d4693905205107221312&q=${userData[i]}`)
            userDataArray.push({name: userData[i], temp: response.data.current.temp_f, condition: response.data.current.condition.text, icon: response.data.current.condition.icon});
        }
        setSavedCityData(userDataArray);
    }

     const goToHome = () => {
        navigate('/Home');
     }

    useEffect(() => {
        currentForecast();

    })



    return(
        <div>
            <Button className={classes.button} onClick={goToHome}>
                Back to Home
            </Button>
            <Typography className={classes.title}>
               Profile
            </Typography>
            <Grid className={classes.grid} >
                    {userData.length > 0 ? savedCityData.map((item, index) => {
                        return (
                                <Card className={classes.card}>
                                 <CardContent >
                                    <Typography key={index} className={classes.cityTitle}>
                                        {item.name}
                                    </Typography>
                                    <Typography className={classes.temp}>
                                        Current Temp : {item.temp}
                                    </Typography>

                                    <Typography className={classes.condition} >
                                        Condition :  {item.condition}
                                    </Typography>
                                    <img src={item.icon} />
                                </CardContent>
                                </Card>


                        )
                    })

                        : <Typography>
                        Looks like you haven't saved anything yet!
                    </Typography>
                         }
            </Grid>
        </div>
    )
}