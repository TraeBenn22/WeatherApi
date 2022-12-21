import { makeStyles } from '@material-ui/styles';
import { FixedStyles } from '../Reusables/FixedStyles';

export const useStyles = makeStyles((theme) => ({
  main: FixedStyles.main,
  button: FixedStyles.button,
  buttonBox: FixedStyles.buttonBox,
  header: FixedStyles.header,
  headerText: FixedStyles.headerText,
  bottomText: FixedStyles.bottomText,
  hidden: FixedStyles.hidden,
  alertBox: FixedStyles.alertBox,
  text: FixedStyles.textField,
}));
