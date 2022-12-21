import { makeStyles } from '@material-ui/styles';
import { FixedStyles } from '../Reusables/FixedStyles';

export const useStyles = makeStyles((theme) => ({
  main: FixedStyles.main,
  button: FixedStyles.button,
  buttonBox: FixedStyles.buttonBox,
  header: FixedStyles.header,
  headerText: FixedStyles.headerText,
  hidden: FixedStyles.hidden,
  alertBox: FixedStyles.alertBox,
  text: FixedStyles.textField,
  bottomText: FixedStyles.bottomText,
  modal: FixedStyles.modal,
  modalButton: FixedStyles.modalButton,
  modalBottom: {
    alignItems: 'center',
  },
  modalText: {
    color: 'blue',
  },
  datePicker: {
    marginLeft: '15%',
  },
}));
