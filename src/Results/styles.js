import {makeStyles} from '@material-ui/core';
import {Colors} from "../Reusables/Colors";

export const useStyles = makeStyles((theme) => ({
    main: {

    },
    title: {
            fontSize: '30px',
        textAlign: 'center',

    },
    hidden: {
        display: 'none',
    },
        temp: {
            paddingTop: '10px',
        },
    infoBox: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    currentDay: {

    },
    currentDate: {
        textAlign: 'center',
        justifyContent: 'center',
       fontSize: '24px',
    },
    conditionBoxWeekly: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    conditionBox: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
    },
    cardContainer: {
      minHeight: '100%',
        minWidth: '100%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    },
    conditionText: {
      fontSize: '18px',
        textAlign: 'center',
        marginTop: '7%',
        marginLeft: '10px',
    },
    payWallWeeklyCard: {
      filter: 'blur(5px)',
    },
    tempTextWeekly: {
        paddingBottom: '10px',
       paddingTop: '10%',
        fontSize: '30px',
        textAlign: 'center',
    },
    tempText: {
        paddingTop: '10%',
        paddingLeft: '35%',
        fontSize: '30px',
        textAlign: 'center',
    },
    dataBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    img: {
    alignContent: 'flex-start',
        marginBottom: '5%',
        marginLeft: '30px',
    },
    imgWeekly: {
        maxWidth: '70%',
    },
    hours: {
    },
    weeklyCard: {
        minHeight: '100%',
        minWidth: '100%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    },

    weeklyText: {
        paddingBottom: '10px',
        textAlign: 'center',
    },
    timeText: {
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',

    },
    condition: {
            paddingTop: '10px',
            display:'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        overflow: 'auto',

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