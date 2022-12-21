import { makeStyles } from '@material-ui/core';
import { FixedStyles } from '../Reusables/FixedStyles';

export const useStyles = makeStyles((theme) => ({
  main: FixedStyles.main,
  title: FixedStyles.title,
  hidden: FixedStyles.hidden,
  cardContainer: FixedStyles.cardContainer,
  currentDate: FixedStyles.currentDate,
  centerText: FixedStyles.centerText,
  tempText: FixedStyles.tempText,
  underline: FixedStyles.underline,
  scrollBox: FixedStyles.scrollBox,
  conditionBox: FixedStyles.conditionBox,
  conditionText: FixedStyles.conditionText,
  img: FixedStyles.img,
  cardContainerResults: {
    minHeight: '70%',
    minWidth: '70%',
    boxShadow: '0 4px  0 #3f51b5',
  },
  temp: {
    paddingTop: '10px',
  },
  weeklyCard: {
    margin: '5px',
    minHeight: '100%',
    minWidth: '100%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  imgWeekly: {
    maxWidth: '70%',
  },
  weeklyText: {
    paddingBottom: '10px',
    textAlign: 'center',
  },
  tempTextWeekly: {
    paddingBottom: '10px',
    paddingTop: '10%',
    fontSize: '30px',
    textAlign: 'center',
  },
  conditionBoxWeekly: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  payWallWeeklyCard: {
    margin: '5px',
    filter: 'blur(5px)',
    minHeight: '100%',
    minWidth: '100%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  dataBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

}));
