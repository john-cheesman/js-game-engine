import { query } from 'bitecs'
import input from '../components/input'
import velocity from '../components/velocity'

export default (world) => {
    for (const eid of query(world, [input, velocity])) {
      velocity.x[eid] = input.x[eid]
      velocity.y[eid] = input.y[eid]
    }
}
