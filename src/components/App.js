import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import WeatherAPI from './weatherAPI';
import bgImg from './images/bg-img.jpg';


const style = makeStyles( theme => ({
                                root : {
                                    marginTop: 50,
                                    display:'flex',
                                    width : 550,
                                    height: 250,
                                    },
                                content: {
                                    flex: '1 0 auto',
                                },
                                cardcss : {
                                    backgroundImage : 'url(' + bgImg + ')',
                                    backgroundPosition : 'center'
                                },
                            })
                        )

function App() {
    const classes = style();
    const [city,setCity] = React.useState(null);

    return (
        <Grid className = {classes.root} alignItems="center" container justify>
            <Card className = {classes.cardcss}>
                <CardContent>
                    <TextField autoFocus label="City Name" 
                        onChange={(e)=> {setCity(e.target.value); }}
                    />
                        <WeatherAPI city={city} />
                </CardContent>
            </Card>
        </Grid>
    )
}

export default App;
