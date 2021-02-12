import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => (
  {
    title: {
      fontFamily: 'DM Sans',
      padding: 50,
      fontWeight: 500,
      fontSize: 28
    },
    bar: {
      backgroundColor: '#4F36D6'
    }
  }))

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.title}>UI Styles - Aula en casa</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
