import { query } from 'bitecs'
import input from '../components/input'
import velocity from '../components/velocity'

export default (world, app) => {
  for (const eid of query(world, [input, velocity])) {
    velocity.x[eid] = app.input.x
    velocity.y[eid] = app.input.y
  }
}
