import { makeStyles } from '@material-ui/styles';
import { FixedStyles } from '../Reusables/FixedStyles';

export const useStyles = makeStyles(() => ({
  main: FixedStyles.main,
  button: FixedStyles.button,
  buttonBox: FixedStyles.buttonBox,
  header: FixedStyles.header,
  headerText: FixedStyles.headerText,
  alertBox: FixedStyles.alertBox,
  hidden: FixedStyles.hidden,
  bottomText: FixedStyles.bottomText,
  text: FixedStyles.textField
}));
