import {makeStyles} from '@material-ui/core';
import {Colors} from "../Reusables/Colors";

export const useStyles = makeStyles((theme) => ({
    title: {
            fontSize: '30px',
        textAlign: 'center',
    },
        temp: {
            paddingTop: '10px',
        },
    infoBox: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    condition: {
            paddingTop: '10px',
            display:'flex',
        flexDirection: 'column',

    },
    cardContent: {
            display: "flex",
        flexDirection: 'column',
        background: '#d5fafa',
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '25%',
        alignItems: 'center',
    },
    card: {
            display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        background: 'grey',
        border: '1px solid black',
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    button: {
        marginTop: '25px',
        marginBottom: '5px',
        height: '25px',
        background: Colors.background,
        border: '2px solid black',
    },

}))