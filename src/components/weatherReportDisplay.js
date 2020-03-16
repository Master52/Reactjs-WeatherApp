import React from 'react'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import sunny from './images/sunny.png';

const style = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  details: { display: 'flex', flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
      display:'flex',
      height: 100,
      width: 100,
      backgroundSize: '100px',
  },
}));

function Display({weatherReport}) {
    var lon                = weatherReport.coord.lon;
    var lat                = weatherReport.coord.lat;
    var weathermain        = weatherReport.weather[0].main;
    var weatherdiscription = weatherReport.weather[0].description;
    var temp               = weatherReport.main.temp;
    var pressure           = weatherReport.main.pressure;
    var humidity           = weatherReport.main.humidity;
    var wind               = weatherReport.wind.speed;
    var country            = weatherReport.sys.country;
    var city               = weatherReport.name
    
    const classes = style();
    return(
        <div>
            <CardContent>
                <Box display = "flex" flexDirection = 'row'>
                    <Box p={1}>
                        <Typography variant = 'h2' color = 'textPrimary'>
                            {city},{country}
                        </Typography>
                        <Typography variant = 'caption' color = 'textSecondary'>
                            {lon}, {lat}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display = "flex" flexDirection = 'row-reverse'>
                    <Box p={0}>
                            <Typography variant = 'h4' color = 'textPrimary'>
                                Temp: {temp}<span>&#176;</span>{"C"}
                            </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display = "flex" flexDirection = 'row-reverse'>
                    <Box p={0}>
                            <Typography variant = 'h6' color = 'textSecondary'>
                                {weatherdiscription}
                            </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
            <Box display = "flex" flexDirection = 'row'>
                    <Box p={1}>
                            <Typography variant = 'h6' color = 'textPrimary'>
                                Humidity: {humidity} %
                            </Typography>
                    </Box>
                    <Box p={1}>
                            <Typography variant = 'h6' color = 'textPrimary'>
                                pressure: {pressure} pa
                            </Typography>
                    </Box>
                    <Box p={1}>
                            <Typography variant = 'h6' color = 'textPrimary'>
                                wind: {wind} km/h
                            </Typography>
                    </Box>
                </Box>
            </CardContent>
        </div>

    )
}

export default Display;
