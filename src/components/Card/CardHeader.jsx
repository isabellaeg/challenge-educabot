import React from 'react'
import { Grid, Typography, Box, Button, makeStyles } from '@material-ui/core'
import Progress from './Progress'
import tareas from '../../assets/Lectura.png'
import preguntas from '../../assets/Preguntas.png'
import Calendar from '../../assets/Calendar.png'

const useStyles = makeStyles(() => ({
  wrapper: {
    border: '1px solid grey'
  },
  bottom: {
    borderTop: '1px solid grey',
    padding: 15
  },
  top: {
    padding: 15
  },
  firstTitle: {
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 12,
    color: '#1A1A1A',
    textTransform: 'uppercase'
  },
  secondTitle: {
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 16,
    color: '#1A1A1A'
  },
  thirdTitle: {
    color: 'white'
  },
  new: {
    backgroundColor: '#27A8FF',
    padding: 4,
    borderRadius: 3,
    color: 'white',
    fontFamily: 'DM Sans',
    fontWeight: 'bold',
    fontSize: 12
  },
  warningLate: {
    color: '#F45C3A',
    fontFamily: 'DM Sans',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: '#EED1CB',
    padding: 4,
    borderRadius: 3
  },
  subtitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: 'grey'
  },
  bold: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black'
  },
  warningText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#F45C3A'
  },
  btn: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '16px'
  }
}))

const Header = ({ data }) => {
  const classes = useStyles()

  return (
    <Grid item container direction='row' alignItems='center'>
      <Grid item container className={classes.top}>
        <Grid item xs={3} sm={2}>
          <Box>
            {data.icon === 'lectura'
              ? (
                <img src={tareas} />
                )
              : (
                <img src={preguntas} />
                )}
          </Box>
        </Grid>
        <Grid item container spacing={1} xs={7}>
          <Grid item xs={12}>
            <Typography className={classes.firstTitle}>{data.type}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.secondTitle}>{data.name}</Typography>
          </Grid>
          {data.isNew
            ? (
              <div>
                <Grid item container xs={12}>
                  <Box className={classes}>
                    <Typography className={classes.new}>
                      ¡NUEVA!
                    </Typography>
                  </Box>
                </Grid>
              </div>

              )
            : null}
          {data.isLate
            ? (
              <div>
                <Grid item container xs={12}>
                  <Box>
                    <Typography className={classes.warningLate}>
                      ¡Estás demorad@!
                    </Typography>
                  </Box>
                </Grid>
              </div>

              )
            : null}
          {data.notSubmitted
            ? (
              <div>
                <Grid item container xs={12}>
                  <Box>
                    <Typography className={classes.warningLate}>
                      No entregada
                    </Typography>
                  </Box>
                </Grid>
              </div>

              )
            : null}

          <Grid item container spacing={1} xs={12}>
            <Grid item>
              <img src={Calendar} alt='calendar' />
            </Grid>
            <Grid item>
              <Box>
                <Typography className={classes.subtitle}>Fecha de Entrega</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography className={!data.isLate ? classes.bold : classes.warningText}>
                15 de Abril
              </Typography>
            </Grid>
          </Grid>
          <Progress data={data} />
        </Grid>
        <Grid item container xs={12} lg={3}>
          <Grid item style={{ marginLeft: 'auto' }}>
            <Button
              variant='contained'
              style={{
                backgroundColor: '#260167',
                textTransform: 'none'
              }}
            >
              <Typography variant='body2' className={classes.btn}>
                Continuar
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
