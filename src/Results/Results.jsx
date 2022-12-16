import {useState, useEffect} from 'react';
import {TextField, Typography, FormControl} from "@material-ui/core";
import {useStyles} from './styles';

export const Results = (props) => {
    const [data, setData] = useState(props.data ? props.data : [0]);
    const [type, setType] = useState(props.type ? props.type : 'Current');




    useEffect(()=> {

    },[]);
    return(
        <div>
            {type === 'Current' ? data.map((item, index) => {
                return (
                    <FormControl>
                        <h1 key={index}>{item}</h1>
                    </FormControl>
                )
            }) : data.map((item, index) => {
                return (
                    <FormControl key={index}>
                        <h1 >{item.date}</h1>
                        <Typography id-="temp">
                            {item.temp}
                        </Typography>
                        <Typography id="tempHigh">
                            {item.tempHigh}
                        </Typography>
                        <Typography id="tempLow">
                            {item.tempLow}
                        </Typography>
                        <Typography id="humidity">
                            {item.humid}
                        </Typography>
                        <Typography id="condition">
                            {item.cond}
                        </Typography>
                    </FormControl>


                )
            })}
        </div>
    )
}