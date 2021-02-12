
import { Grid } from '@material-ui/core'

import Card from './Card/Card'
import { lecturas } from '../mockData'

const Lecturas = () => {
  return (
    <div style={{ marginLeft: '10%' }}>
      <Grid item container xs={12} sm={10} spacing={5}>
        {lecturas.map((data) => (
          <Grid item xs={12} lg={12} key={data.id}>
            <Card data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Lecturas
