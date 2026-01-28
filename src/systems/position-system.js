import { query } from 'bitecs'
import position from '../components/position'
import velocity from '../components/velocity'

export default () => {
  return (world, dt) => {
    for (const eid of query(world, [position, velocity])) {
      position.x[eid] += velocity.x[eid] * velocity.s[eid] * dt
      position.y[eid] += velocity.y[eid] * velocity.s[eid] * dt
    console.log(position.x[eid], position.y[eid])
    }
  }
}
