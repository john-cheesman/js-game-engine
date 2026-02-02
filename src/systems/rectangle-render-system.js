import { query } from 'bitecs'
import position from '../components/position'
import rectangle from '../components/rectangle'

export default (world, app) => {
  for (const eid of query(world, [position, rectangle])) {
    app.context.strokeStyle = '#ffffff'
    app.context.strokeRect(
        position.x[eid] + rectangle.x[eid],
        position.y[eid] + rectangle.y[eid],
        rectangle.w[eid],
        rectangle.h[eid])
  }

  return world
}
