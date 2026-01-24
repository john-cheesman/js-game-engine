import { query } from 'bitecs'
import position from '../components/position'
import velocity from '../components/velocity'

export default () => {
  return (world, dt) => {
    for (const eid of query(world, [position, velocity])) {
      position[eid].x += velocity[eid].x * velocity[eid].s * dt
      position[eid].y += velocity[eid].y * velocity[eid].s * dt
    }
  }
}
