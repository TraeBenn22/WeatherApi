import {useState, useEffect, useCallback} from 'react';
import {FormControl, Button, Typography, Box} from "@material-ui/core";
import {useStyles} from './styles';
import axios from "axios";

export const Profile = () => {
    const [userData, setUserData] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []);
    const [savedCityData, setSavedCityData] = useState([]);
    const classes = useStyles();

    const currentForecast = async () => {
        const userDataArray = [];
        for(let i = 0; i < userData.length - 1; i++) {
            const response = await axios(`http://api.weatherapi.com/v1/current.json?key=371a085f9e6d4693905205107221312&q=${userData[i]}`)
            const temp = response.data.current.temp_f;
            const condition = response.data.current.condition.text;
            const icon = response.data.current.condition.icon;
            userDataArray.push([{name: userData[i], temp: temp, condition: condition, icon: icon}]);
        }
        setSavedCityData(userDataArray);
    }

    return(
        <div>
            <Typography>
               Profile
            </Typography>
                    {userData.length > 0 ? savedCityData.map((item, index) => {
                        return (
                            <FormControl>
                                <Typography key={index}>
                                    {item.name}
                                </Typography>
                                <Typography>
                                    {item.temp}
                                </Typography>
                                <Typography>
                                    {item.condition}
                                </Typography>
                                <img src={item.icon} />

                            </FormControl>

                        )
                    }) : <Typography>
                        Looks like you haven't saved anything yet!
                    </Typography>
                         }



        </div>
    )
}