import React from 'react'
import {Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
      },
}))


function Weather(props) {
    const classes = useStyles()

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.icon}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Temperature: {props.temp}°C 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
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
