import {useState, useEffect, useCallback} from 'react';
import {TextField, Typography, FormControl, Button, Box, Modal} from "@material-ui/core";
import {useStyles} from './styles';
import DatePicker from "react-datepicker";
const Results = (props) => {
    const classes = useStyles();
    const [currentUserData, setCurrentUserData] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []);
    const [savingErrorModal , setSavingErrorModal] = useState(false);
    const saveToProfile = () => {
                const currentUser = currentUserData;
                const nameSet = new Set();
                for(let i = 0; i < currentUser.length; i++) {
                    nameSet.add(currentUserData[i]);
                }
                if(nameSet.has(props.city)) {
                    setSavingErrorModal(true);
                } else {
                    currentUser.push(props.city);
                    console.log(currentUserData);
                    setCurrentUserData(currentUser);
                    localStorage.setItem('user', JSON.stringify(currentUserData));
                }



    }
    return(
        <div>
            <h1 className={classes.title}>{props.city}</h1>
            {props.type === 'Current' ? props.data.map((item, index) => {
                return (
                    <div key={index}>
                        <FormControl>
                            <Typography>
                                {props.city}
                            </Typography>
                            <Typography>
                                {item.temp}
                            </Typography>
                            <Typography>
                                {item.condition}
                            </Typography>
                            <img src={item.icon}>

                            </img>
                        </FormControl>
                    </div>
                )
            }) : props.data.map((item, index) => {
                return(
                    <FormControl className={classes.main} key={index}>
                        <h1 className={classes.title}>{item.date}</h1>
                        <FormControl className={classes.infoBox}>
                            <Typography>Average Tempature {item.temp}F</Typography>
                            <Typography>High {item.tempHigh}F</Typography>
                            <Typography>Low {item.tempLow}F</Typography>
                            <Typography>Humidity {item.humid}%</Typography>
                            <Typography className={classes.condition}>{item.cond}
                                <img src={item.condIcon} alt={item.condIcon}></img>
                            </Typography>
                        </FormControl>
                    </FormControl>
                )
            })}
            <Button id='save' className={classes.button} onClick={saveToProfile}>
                Save this location to your Profile?
            </Button>
            <Modal open={savingErrorModal} onClose={(e) => setSavingErrorModal(false)}>
                <Box className={classes.modal}>
                    Looks like you already have that city saved!
                </Box>
            </Modal>
        </div>

    )
}
export default Results;