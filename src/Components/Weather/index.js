import react from "react";
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
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

export default Weather;
