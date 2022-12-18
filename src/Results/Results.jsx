import {useState, useEffect, useCallback} from 'react';
import {TextField, Typography, FormControl} from "@material-ui/core";
import {useStyles} from './styles';
const Results = (props) => {
    const classes = useStyles();
    return(
        <div>
            <h1 className={classes.title}>{props.city}</h1>
            {props.type === 'Current' ? props.data.map((item, index) => {
                return (
                    <div key={index}>
                        <FormControl>
                            <Typography>
                                {item}
                            </Typography>
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
        </div>

    )
}
export default Results;