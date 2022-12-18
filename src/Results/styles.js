import {makeStyles} from '@material-ui/core';
import {Colors} from "../Reusables/Colors";

export const useStyles = makeStyles((theme) => ({
        main: {
        display: "flex",
            flexDirection: 'column',
            border: '2px solid black',


        },
    title: {
            fontSize: '30px',
        textAlign: 'center',
    },
        tempBox: {
          flexDirection: 'row',
        },
    infoBox: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    condition: {
            display:'flex',
            justifyContent: 'flex-end',


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