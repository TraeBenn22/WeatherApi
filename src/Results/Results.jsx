import {useState, useEffect, useCallback} from 'react';
import {TextField, Typography, FormControl} from "@material-ui/core";
import {useStyles} from './styles';
import {Form} from "react-router-dom";

export const Results = (props) => {
    const classes = useStyles();
    return(
        <div >
            {props.type === 'Current' ? props.data.map((item, index) => {
                return (
                    <div key={index}>
                        {item}
                    </div>
                )
            }) : props.data.map((item, index) => {
                return(
                    <FormControl className={classes.main} key={index}>
                        <h1>{item.name}</h1>
                        <Typography className={classes.tempBox}>
                            <p>{item.temp}</p>
                            <p>{item.tempHigh}</p>
                            <p>{item.tempLow}</p>
                        </Typography>

                        <p>{item.humid}</p>
                        <p>{item.cond}</p>

                    </FormControl>
                )
            })}
        </div>

    )
}