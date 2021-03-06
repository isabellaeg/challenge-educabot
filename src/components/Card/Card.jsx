import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Header from './CardHeader'
import Footer from './CardFooter'

const useStyles = makeStyles(() => ({
  card: {
    border: '1px solid #DFDFDA',
    borderRadius: 8,
    marginTop: '5%',
    margingLeft: '20px'
  }
}))

const Card = ({ data }) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.card}>
      <Header data={data} />
      <Footer data={data} />
    </Grid>
  )
}

export default Card
