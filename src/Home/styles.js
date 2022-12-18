import { makeStyles} from '@material-ui/styles';
import { Colors } from '../Reusables/Colors';
export const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Colors.background,
    },
    button: {
        marginTop: '25px',
        marginBottom: '5px',
        height: '25px',
        background: Colors.background,
        border: '2px solid black',
    },
    buttonBox : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    header: {
        display: 'flex',
        paddingBottom: '50px',
    },
    headerText: {
        fontSize: '50PX',
        textAlign: 'center',
    },
    infoBox: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '50px',
    },




}))