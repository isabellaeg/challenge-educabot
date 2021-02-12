import { Grid, Typography, makeStyles } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import HourglassFullIcon from '@material-ui/icons/HourglassFull'

const useStyles = makeStyles(() => ({
  lightText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: 'grey'
  },
  darkText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black'
  }
}))

const Progress = ({ data }) => {
  const classes = useStyles()
  return (
    <Grid item container spacing={1} xs={12}>
      <Grid item>
        {data.inReview && <HourglassFullIcon fontSize='medium' />}
        {data.progress === 100 && !data.inReview && (
          <CheckCircleIcon
            variant='static' style={{ color: '#50D174' }} size={20}
          />
        )}

        {data.progress !== 100 && !data.inReview && (
          <CircularProgress
            variant='static' value={data.progress} style={{ color: '#50D174' }} size={20}
          />
        )}
      </Grid>
      <Grid item>
        {data.progress !== 100 && !data.inReview && (
          <Typography className={classes.lightText}>Progreso</Typography>
        )}
        {data.progress === 100 && !data.inReview && (
          <Typography className={classes.darkText}>Actividad Completada!</Typography>
        )}
        {data.inReview && data.progress === 100 && (
          <Typography className={classes.darkText}>Esperando corrección</Typography>
        )}
      </Grid>
      <Grid item>
        {data.progress > 0 &&
        data.progress < 100 &&
        !data.inReview && (
          <Typography className={classes.darkText}>{`${data.progress}%`}</Typography>
        )}
        {data.progress === 0 && !data.inReview && (
          <Typography className={classes.lightText}>-</Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default Progress
