import React from 'react'
import { Grid } from '@material-ui/core'
import Card from './Card/Card'
import { tareas } from '../mockData'

const Preguntas = () => {
  return (
    <div style={{ marginLeft: '10%' }}>
      <Grid item container xs={12} sm={10} spacing={10}>
        {tareas.map((data) => (
          <Grid item xs={12} lg={12} key={data.id}>
            <Card data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Preguntas
