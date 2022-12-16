import {useState, useEffect} from 'react';
import {Button, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useStyles} from './styles';
import {useNavigate} from "react-router";
import {FormControl} from "@mui/material";

export const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [nameCheck, setNameCheck] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);
    const classes = useStyles();
    const navigate = useNavigate();
    const handleChange = (event) => {
        event.target.id === 'name' ? setUserName(event.target.value) : setPassword(event.target.value);
    }

    const handleSignUp = () => {
        if(userName.length > 3) {
            localStorage.setItem('username', userName)
        } else {
            setNameCheck(true);
        }
        if( password.length > 3) {
            localStorage.setItem('password', password)
        } else {
                setPasswordCheck(true);
        }
        if(!nameCheck && !passwordCheck) {
            navigate('/Home')
        }
    }

    return(
        <div>
            <FormControl className={classes.header} >
                <Typography>
                    Sign Up
                </Typography>
            </FormControl>
            <TextField id='name' className={classes.main} placeholder={'UserName'} onChange={(e) => handleChange(e)} >
            </TextField>
            <TextField id='password' className={classes.main} placeholder={'Password'} onChange={(e) => handleChange(e)} >
            </TextField>
            <Button id='Signup' onClick={handleSignUp}>
                Sign up!
            </Button>
        </div>
    )
}