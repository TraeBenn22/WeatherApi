import {
  Typography, CardContent, Card, FormControl, Box,
} from '@material-ui/core';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import OpacityIcon from '@mui/icons-material/Opacity';
import { useStyles } from './styles';

export function Results(props) {
  const classes = useStyles();
  const { forecastData, city, hours } = props;
  return (
    <div className={hours.length > 0 ? classes.main : classes.hidden}>
      <h1 className={classes.title}>{city}</h1>
      <Typography className={classes.underline}>Currently</Typography>
        <Box className={classes.scrollBox}>
      <Card className={classes.cardContainerResults}>
        <CardContent>
          <FormControl className={classes.conditionBox}>
              <img className={classes.img} src={forecastData[0].condIcon} alt={forecastData[0].condition} />
              <Typography className={classes.tempText}>
              {forecastData[0].temp}F°
            </Typography>

          </FormControl>
            <Box className={classes.dataBox}>
            <Typography className={classes.centerText}>
              <OpacityIcon />
              {forecastData[0].humid}%
            </Typography>
            <Typography className={classes.centerText}>
              <NorthIcon />
              {forecastData[0].tempHigh}F°
            </Typography>
            <Typography className={classes.centerText}>
              <SouthIcon />
              {forecastData[0].tempLow}F°
            </Typography>
          </Box>
        </CardContent>
      </Card>
        </Box>
      <Typography className={classes.underline}>24 Hour Forecast</Typography>
        <Box className={classes.scrollBox}>
      <ScrollMenu>
        {hours.map((item, index) => (
          <Card className={classes.cardContainer} key={index}>
            <CardContent>
              <Typography className={classes.centerText}>
                {item.time}
              </Typography>

              <img src={item.condIcon} alt={item.condition} />
              <Typography className={classes.centerText}>
                {item.temp}F°
</Typography>

            </CardContent>
          </Card>
        ))}
      </ScrollMenu>
        </Box>
      <Typography className={classes.underline}>Weekly Forecast</Typography>
        <Box className={classes.scrollBox}>
      <ScrollMenu>
        {forecastData.map((item, index) => (
          <Card className={classes.weeklyCard} key={index}>
            <CardContent>
              <Typography className={classes.currentDate}>
                {item.date}
              </Typography>
                <Box className={classes.centerText}>
                    <img className={classes.imgWeekly} src={item.condIcon} alt={item.condition} />
                </Box>
                <Typography className={classes.tempTextWeekly}>
                {item.temp}F°
</Typography>
              <Typography className={classes.weeklyText}>
                <OpacityIcon />
                {item.humid}%
</Typography>
              <Typography className={classes.weeklyText}>
                <NorthIcon />
                {item.tempHigh}F°
</Typography>
              <Typography className={classes.weeklyText}>
                <SouthIcon />
                {item.tempLow}F°
</Typography>
            </CardContent>
          </Card>
        ))}
        {forecastData.map((item, index) => (
          <Card className={classes.payWallWeeklyCard} key={index}>
            <CardContent>
              <Typography className={classes.currentDate}>
                {item.date}
              </Typography>

                <Box className={classes.centerText}>
                    <img className={classes.imgWeekly} src={item.condIcon} alt={item.condition} />
                </Box>
                <Typography className={classes.tempTextWeekly}>
                    {item.temp} F°
                </Typography>


              <Typography className={classes.weeklyText}>
                <OpacityIcon />
                  {item.humid}%
                </Typography>
              <Typography className={classes.weeklyText}>
                <NorthIcon />
                  {item.tempHigh}F°
              </Typography>
              <Typography className={classes.weeklyText}>
                <SouthIcon />
                {item.tempLow}F°
              </Typography>
            </CardContent>
          </Card>
        ))}
      </ScrollMenu>
        </Box>
    </div>

  );
}
