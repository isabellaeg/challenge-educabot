import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import Brightness1Icon from '@material-ui/icons/Brightness1'
import shape from '../../assets/Shape.png'

const useStyles = makeStyles(() => (
    {
        bottom: {
            borderTop: '1px solid #DFDFDA',
            padding: 15
          },
          roundedButton: {
            borderRadius: 50,
            border: '1px solid #DFDFDA',
            padding: 3,
            width: '20px'
          },
          tag: {
            fontFamily: 'DM Sans',
            fontSize: 14,
            fontWeight: 'bold'
          }
  }))

const Footer =  ({ data }) => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      direction='row'
      justify='space-between'
      alignItems='center'
      className={classes.bottom}
    >
      <Grid
        item
        direction='row'
        justify='space-evenly'
        alignItems='center'
        className={classes.roundedButton}
        xs={4}
        sm={3}
        md={1}
        container
      >
        <Grid item>
          <Brightness1Icon
            style={{ color: '#01CEAA', paddingTop: 2, height: '8px', width: '8px'}}
            fontSize='small'
          />
        </Grid>
        <Grid item>
          <Typography className={classes.tag}>{data.category}</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <img src={shape} alt="comment"/>
      </Grid>
    </Grid>
  )
}


export default Footer