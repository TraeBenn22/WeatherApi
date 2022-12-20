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
        border: '1px solid black',

    },
    buttonBox : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    header: {

        display: "flex",
        paddingBottom: '15px',
        justifyContent: 'space-evenly',

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
        textAlign: 'center',
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
        display: 'flex',
        width: '25%',
        height: '25%',
        flexDirection: 'column',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #000',
    },
    modalButton: {
        width: '50%',
        marginTop: '25px',
        marginBottom: '5px',
        height: '25px',
        background: Colors.background,
        border: '2px solid black',
    },
    modalBottom: {
        alignItems: 'center',
    },
    modalText: {
        color: 'blue',
    },
    datePicker: {
        marginLeft: '30%',
    }
}))