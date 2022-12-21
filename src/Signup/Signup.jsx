import { useState, useEffect } from 'react';
import {
  Button, TextField, Typography, Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { FormControl } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useStyles } from './styles';

export function SignUp() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [lengthCheck, setLengthCheck] = useState({ bool: false, type: '' });
  const [alertText, setAlertText] = useState('');
  const classes = useStyles();
  const navigate = useNavigate();
  const handleChange = (event) => {
    event.target.id === 'name' ? setUserName(event.target.value) : setPassword(event.target.value);
  };

  const handleAlertStatus = () => {
    lengthCheck.type === 'Both' ? setAlertText('username and password is not long enough') : lengthCheck.type === 'name' ? setAlertText('Username  is not long enough') : setAlertText('Password is not long enough');
  };

  const handleSignUp = () => {
    const user = { username: userName, password, savedCities: [] };
    if (userName.length > 3 && password.length > 3) {
      localStorage.setItem('userData', JSON.stringify(user));
      localStorage.setItem('guestStatus', 'false');
      navigate('/Home');
    } else if (userName.length < 4 || password.length < 4) {
      userName.length < 4 && password.length < 4 ? setLengthCheck({ bool: true, type: 'Both' }) : userName.length < 4 ? setLengthCheck({ bool: true, type: 'name' }) : setLengthCheck({ bool: true, type: 'password' });
    }
  };

  useEffect(() => {
    handleAlertStatus();
  }, [lengthCheck]);

  return (
    <div className={classes.main}>
      <FormControl className={classes.header}>
        <Typography className={classes.headerText}>
          Sign Up
        </Typography>
      </FormControl>
      <TextField id="name" className={classes.text} value={userName} variant="outlined" placeholder="Username" onChange={(e) => handleChange(e)} />
      <TextField id="password" className={classes.text} value={password} variant="outlined" placeholder="Password" onChange={(e) => handleChange(e)} />
      <div className={classes.buttonBox}>
        <Button id="Signup" className={classes.button} variant="contained" color="primary" onClick={handleSignUp}>
          Sign up!
        </Button>
      </div>
      <Box className={lengthCheck.bool ? classes.alertBox : classes.hidden}>
        <Alert severity="error" onClose={(e) => setLengthCheck({ bool: false, type: '' })}>{alertText}</Alert>

      </Box>

    </div>
  );
}
