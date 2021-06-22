import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../stylings/Cards.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 340,
    width: 300,
  },
  subsection:{
    height: 90,
  },
  lmbutton:{
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 500
  },
  roundbutton:{
    marginLeft: '60px',
    fontSize: 35,
    fontWeight: 600,
    backgroundColor: '#04DB86',
    borderRadius: '50px',
    height: 65,
    width: 30,
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1624286336487-0319d5e88d52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions className={classes.subsection}> 
        <Button size="small" className={classes.lmbutton}>
          Learn More
        </Button>
        <Button size="small" className={classes.roundbutton} style={{marginLeft: '75px'}} >
        &rarr;
        </Button>
      </CardActions>
    </Card>
  );
}