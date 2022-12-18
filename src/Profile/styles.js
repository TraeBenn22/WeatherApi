import { makeStyles} from '@material-ui/styles';
import { Colors } from '../Reusables/Colors';
export const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexDirection: 'column',
        border: '2px solid black',

    },
    infoBox: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
      border: '2px solid black'  ,
    },
    cityTitle: {
        color: 'white',
        textAlign: 'center',
    },
    temp: {
        color: 'white',
        paddingLeft: '20px',
    },
    condition: {
        color: 'white',
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '25%',
    },
    card: {
      background: 'grey',
    },
    text: {
      color: 'white',
    },
    title: {
        fontSize: '55px',
        textAlign: 'center',
    }
}))