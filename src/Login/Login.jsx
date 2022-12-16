import { useState, useEffect} from 'react';
import {TextField, Typography, Button, FormControl} from '@material-ui/core';
import { useStyles }  from './styles';
import { useNavigate } from "react-router";
import {Link} from "react-router-dom";
import {InputLabel, OutlinedInput} from "@mui/material";
export const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();
    const navigate = useNavigate();
    const handleChange = (event) => {
        event.target.id === 'name' ? setUserName(event.target.value) : setPassword(event.target.value);
    }



    const goToHome = () => {
        if(localStorage.getItem('username') && localStorage.getItem('username') === userName) {
            if(localStorage.getItem('password') && localStorage.getItem('password') === password) {
                navigate('/Home');
            }   else {
                console.log('wrong password')
            }
        } else {
            console.log('wrong username')
        }
    }

    useEffect(() => {

    },[])

    return(
        <div className={classes.main}>
            <FormControl className={classes.header}>
                <Typography className={classes.headerText}>
                    Login
                </Typography>
            </FormControl>
                <TextField id='name' className={classes.text} label="username" value={userName} variant="outlined" placeholder={'Username'} onChange={(e) => handleChange(e)} >
                </TextField>
                <TextField id='password' className={classes.text} label="password" value={password} variant="outlined" placeholder={'Password'} onChange={(e) => handleChange(e)} >
                </TextField>
            <div className={classes.buttonBox}>
                <Button id='Signup'  className={classes.button} onClick={() => navigate('/Signup')} >
                    Need to Sign up?
                </Button>
                <Button id='Guest' className={classes.button} onClick={() => navigate('/Home')}>
                    Continue as Guest
                </Button>
            </div>
            <div className={classes.buttonBox}>
                <Button id="Login"  className={classes.button} onClick={goToHome}>
                    Login
                </Button>
            </div>
            <Typography className={classes.bottomText}>
                Trae's Weather App
            </Typography>


        </div>
    )
}