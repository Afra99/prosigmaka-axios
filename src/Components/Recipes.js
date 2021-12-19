import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RecipeCard from './RecipeCard'
import useStyles from './Style'
import {useEffect, useState} from "react";
// import axios from "axios";
import {Button} from "@material-ui/core";


export default function Recipes() {
  const classes = useStyles();
  const [cards, setCards] = useState([])
  const [refresh, setRefresh] = useState(true)

  //deps = [] -- dijalankan hanya sekali
  useEffect(()=>{
    console.log('useEffect')
    // axios.get('http://localhost:1234/recipes').then(res => {
    //   setCards(res.data)
    // })
  },[])

  const doRefresh = () => {
    console.log('doRefresh')
    setRefresh(!refresh)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Button onClick={doRefresh}>Refresh</Button>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Recipes
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Aneka macam ide resep masakan dan makanan yang simpel
              tersaji disini untuk memberi panduan dan mempermudah dalam menentukan hidangan lezat untuk
              keluarga anda
            </Typography>
            <div className={classes.heroButtons}>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <RecipeCard key={card.id} card={card} />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
