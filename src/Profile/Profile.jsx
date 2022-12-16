import {useState, useEffect} from 'react';
import {TextField, Typography} from "@material-ui/core";
import {useStyles} from './styles';

export const Profile = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const styles = useStyles();
    const handleChange = (event) => {
        event.target.id === 'name' ? setUserName(event.target.value) : setPassword(event.target.value);
    }

    return(
        <div>
            <Typography>
               Profile
            </Typography>
            <TextField id='name' className={styles.main} placeholder={'UserName'} onChange={(e) => handleChange(e)} >

            </TextField>
            <TextField id='password' className={styles.main} placeholder={'Password'} onChange={(e) => handleChange(e)} >

            </TextField>
        </div>
    )
}