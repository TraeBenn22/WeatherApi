import React from 'react';
import { useState, useEffect } from 'react';
import {
  TextField, Typography, Button, FormControl, Box,
} from '@material-ui/core';
import { useNavigate } from 'react-router';
import Alert from '@mui/material/Alert';
import { useStyles } from './styles';

export function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userCheck, setuserCheck] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const handleChange = (event) => {
    event.target.id === 'name' ? setUserName(event.target.value) : setPassword(event.target.value);
  };

  const handleGuestLogin = () => {
    localStorage.setItem('guestStatus', 'true');
    navigate('/Home');
  };

  const goToHome = () => {
    const user = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : '';
    if (user.username !== userName || user.password !== password) {
      setuserCheck(true);
    } else {
      localStorage.setItem('guestStatus', 'false');
      navigate('/Home');
    }
  };

  useEffect(() => {

  }, []);

  return (
    <div className={classes.main}>
      <FormControl className={classes.header}>
        <Typography className={classes.headerText}>
          Login
        </Typography>
      </FormControl>

      <TextField id="name" className={classes.text} value={userName} variant="outlined" placeholder="Username" onChange={(e) => handleChange(e)} />
      <TextField id="password" className={classes.text} value={password} variant="outlined" placeholder="Password" onChange={(e) => handleChange(e)} />
      <div className={classes.buttonBox}>
        <Button id="Signup" className={classes.button} variant="contained" color="primary" onClick={() => navigate('/Signup')}>
          Need to Sign up?
        </Button>
        <Button id="Guest" className={classes.button} variant="contained" color="primary" onClick={handleGuestLogin}>
          Continue as Guest
        </Button>
      </div>
      <div className={classes.buttonBox}>
        <Button id="Login" className={classes.button} variant="contained" color="primary" onClick={goToHome}>
          Login
        </Button>
      </div>
      <Box className={userCheck ? classes.alertBox : classes.hidden}>
        <Alert severity="error" onClose={(e) => setuserCheck(false)}>Your Username or Password was incorrect</Alert>

      </Box>
      <Typography className={classes.bottomText}>
        Trae's Weather App
      </Typography>

    </div>
  );
}
