import { makeStyles } from '@material-ui/styles';
import { FixedStyles } from '../Reusables/FixedStyles';

export const useStyles = makeStyles(() => ({
  main: FixedStyles.main,
  button: FixedStyles.button,
  scrollBox: FixedStyles.scrollBox,
  dataBox: FixedStyles.dataBox,
  buttonBox: FixedStyles.buttonBox,
  conditionBox: FixedStyles.conditionBox,
  conditionText: FixedStyles.conditionText,
  headerText: FixedStyles.headerText,
  tempText: FixedStyles.tempText,
  centerText: FixedStyles.centerText,
  header: FixedStyles.header,
  currentDate: FixedStyles.currentDate,
  img: FixedStyles.img,
  hidden: FixedStyles.hidden,
  underline: FixedStyles.underline,
  largeText: FixedStyles.largeText,
  title: FixedStyles.title,
  cardContainerHome: {
    margin: '10px',
    minHeight: '50%',
    minWidth: '50%',
    boxShadow: '0 4px  0 #3f51b5',
  },

  infoBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '50px',
  },
}));
