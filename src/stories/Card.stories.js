import { Grid } from '@material-ui/core'
import Card from '../components/Card/Card'
import Header from '../components/Card/CardHeader'
import Footer from '../components/Card/CardFooter'

export default {
  title: 'Card',
  component: Card
}

const mockDataLecturas = {
  id: 1,
  icon: 'lectura',
  type: 'lectura',
  name: 'Cuentos para aprender ortografia',
  date: '15 de Abril',
  progress: 25,
  category: 'Lengua',
  isNew: false,
  isLate: true
}

const mockDataPreguntas = {
  id: 1,
  type: 'Actividad con preguntas',
  name: '¿Qué es la potencias y la raíz cuadrada..',
  date: '15 de Abril',
  progress: 25,
  isNew: true,
  isLate: false,
  inReview: true,
  notSubmitted: false,
  category: 'Lengua'
}

export const Lecturas = () => {
  return (
    <Grid item container xs={5}>
      <Header data={mockDataLecturas} />
      <Footer data={mockDataLecturas} />
    </Grid>
  )
}

export const Preguntas = () => {
  return (
    <Grid item container xs={5}>
      <Header data={mockDataPreguntas} />
      <Footer data={mockDataPreguntas} />
    </Grid>
  )
}
