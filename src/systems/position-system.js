import { query } from 'bitecs'
import position from '../components/position'
import velocity from '../components/velocity'

export default (world) => {
    for (const eid of query(world, [position, velocity])) {
      position.x[eid] += velocity.x[eid] * velocity.s[eid] * world.dt
      position.y[eid] += velocity.y[eid] * velocity.s[eid] * world.dt
      //console.log(world.dt)
    //console.log(position.x[eid], position.y[eid])
    }
}
