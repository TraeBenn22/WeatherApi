import {Typography, CardContent, Card, FormControl, Box} from "@material-ui/core";
import {useStyles} from './styles';
import { ScrollMenu} from "react-horizontal-scrolling-menu";
import {useCallback, useEffect, useState} from "react";
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import OpacityIcon from '@mui/icons-material/Opacity';

export const Results = (props) => {
    const classes = useStyles();
    const {forecastData, city, hours} = props;
    return(
        <div className={hours.length > 0 ? classes.main : classes.hidden}>
            <h1 className={ classes.title}>{city}</h1>
            <Typography className={classes.title}>Currently</Typography>
                    <Card className={classes.cardContainer} >
                        <CardContent >
                            <Typography className={classes.currentDate}>
                                {forecastData[0].date}
                            </Typography>
                            <FormControl className={classes.conditionBox}>
                                <Typography className={classes.conditionText}>
                                    {forecastData[0].cond}
                                </Typography>
                                <Typography className={classes.tempText}>{forecastData[0].temp} F°
                                </Typography>
                            </FormControl>
                            <img className={classes.img} src={forecastData[0].condIcon} />
                            <Box className={classes.dataBox}>
                                <Typography className={classes.text}>
                                    <OpacityIcon/> {forecastData[0].humid}%
                                </Typography>
                                <Typography className={classes.text}>
                                   <NorthIcon /> {forecastData[0].tempHigh} F°
                                </Typography>
                                <Typography className={classes.text}>
                                   <SouthIcon/> {forecastData[0].tempLow} F°
                                </Typography>
                            </Box>

                        </CardContent>
                    </Card>
            <Typography className={classes.title}>24 hour Forecast</Typography>
            <ScrollMenu >
                        {hours.map((item, index) => {
                            return(
                                <Card className={classes.cardContainer} key={index}>
                                    <CardContent >
                                        <Typography className={classes.timeText}>
                                             {item.time}
                                        </Typography>

                                        <img src={item.condIcon} alt={item.condition} />
                                        <Typography className={classes.text}>
                                             {item.temp} F°
                                        </Typography>

                                    </CardContent>
                                </Card>
                            )
                        })}

            </ScrollMenu>
            <Typography className={classes.title}>Weekly Forecast</Typography>
            <ScrollMenu>
                {forecastData.map((item, index) => {
                    return(
                        <Card className={classes.weeklyCard} >
                            <CardContent key={index}>
                                <Typography className={classes.currentDate}>
                                    {item.date}
                                </Typography>
                                <FormControl className={classes.conditionBoxWeekly}>

                                    <img className={classes.imgWeekly} src={item.condIcon} alt={item.condition} />
                                </FormControl>
                                <Typography className={classes.tempTextWeekly}>{item.temp} F°
                                </Typography>
                                    <Typography className={classes.weeklyText}>
                                        <OpacityIcon/> {item.humid}%
                                    </Typography>
                                    <Typography className={classes.weeklyText}>
                                        <NorthIcon /> {item.tempHigh} F°
                                    </Typography>
                                    <Typography className={classes.weeklyText}>
                                        <SouthIcon/> {item.tempLow} F°
                                    </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
                {forecastData.map((item, index) => {
                    return (
                        <Card className={classes.payWallWeeklyCard}>
                            <CardContent key={index}>
                                        <Typography className={classes.currentDate}>
                                            {item.date}
                                        </Typography>
                                        <FormControl className={classes.conditionBox}>

                                            <Typography className={classes.tempText}>{item.temp} F°
                                            </Typography>
                                        </FormControl>
                                        <img className={classes.imgWeekly} src={item.condIcon} alt={item.condition}/>
                                        <Typography className={classes.text}>
                                            <OpacityIcon/> {item.humid}%
                                        </Typography>
                                        <Typography className={classes.text}>
                                            <NorthIcon /> {item.tempHigh} F°
                                        </Typography>
                                        <Typography className={classes.text}>
                                            <SouthIcon/> {item.tempLow} F°
                                        </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </ScrollMenu>
        </div>

    )
}
