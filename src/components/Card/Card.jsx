import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'

const useStyles = makeStyles(() => ({
    card: {
        border: '1px solid #DFDFDA',
        borderRadius: 8,
          marginTop: '5%',
          margingLeft: '200px',
      }
  }))

const Card = ({ data }) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.card}>
      <CardHeader data={data} />
      <CardFooter data={data} />
    </Grid>
  )
}

export default Card