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
        width: '50%',
        display: "flex",
        paddingBottom: '15px',
        paddingLeft: '25%',

    },
    headerText: {

        fontSize: '50PX',
        textAlign: 'center',
    },
    hidden: {
        display: 'none',
    },
    results: {

    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '50%',
        paddingTop: '10px',
        marginLeft: '25%',
    },
    bottomText: {
        fontSize: '20px',
        paddingTop: '25%',
        textAlign: 'center',
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
    datePicker: {
    }
}))