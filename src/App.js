import reactDom from "react-dom";
import React from 'react'
import { Grid, Typography, Box, makeStyles } from '@material-ui/core'
import Navbar from "./components/Navbar";
import MainTitle from "./components/MainTitles"
import Lecturas from "./components/Lecturas";
import Preguntas from "./components/Preguntas";

const useStyles = makeStyles((theme) => ({
  title: { 
    fontFamily: 'DM Sans', 
    color: '#4F36D6', 
    fontWeight: '500' }
}))

const App = () => {

  const classes = useStyles()

  return(
    <div>
      <Navbar/>
        <Grid container justify='center' alignItems='center' spacing={5}>
        <Grid item xs={12}>
          <Box pl={9} pt={5}>
            <Typography variant='h5' component='h5' className={classes.title}>
            Listones Tareas (Perfil Alumno)
          </Typography>
        </Box>
        <MainTitle title='Lecturas'/>
        <Lecturas/>
        <MainTitle title='Preguntas'/>
        <Preguntas/>
    </Grid>
    </Grid>
    </div>
  )
}

export default App