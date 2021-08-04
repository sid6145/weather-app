import React from 'react'
import {Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, makeStyles} from "@material-ui/core";
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
        padding: "200px 200px",
        border: "none",
        boxShadow: "2px 2px 10px black",
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: "white"
      },
}))


function Weather(props) {
    const classes = useStyles()

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Temperature: {props.temp}°C 
            </Typography>
            <Typography variant="body2" component="p">
             {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

export default Weather;
