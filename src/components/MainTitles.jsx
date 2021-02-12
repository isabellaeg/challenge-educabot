import { Grid, Typography, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  title: {
    marginTop: 20,
    fontFamily: 'DM Sans',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 70,
    textTransform: 'uppercase'
  }
}))

const MainTitle = ({ title }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={3}>
      <Box className={classes.title} pt={2}>
        <Typography variant='h8' component='h5'>
          {title}
        </Typography>
      </Box>
    </Grid>
  )
}

export default MainTitle
