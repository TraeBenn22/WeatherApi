import {makeStyles} from '@material-ui/core';

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

}))