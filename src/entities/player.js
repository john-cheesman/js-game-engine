import { addEntity, addComponent } from 'bitecs'
import velocity from '../components/velocity'
import position from '../components/position'
import rectangle from '../components/rectangle'
import input from '../components/input'

export default world => {
  const eid = addEntity(world)

  addComponent(world, eid, position)
  position.x[eid] = 0
  position.y[eid] = 0
  position.z[eid] = 1

  addComponent(world, eid, velocity)
  velocity.x[eid] = 0
  velocity.y[eid] = 0

  addComponent(world, eid, rectangle)
  rectangle.x[eid] = 0
  rectangle.y[eid] = 0
  rectangle.w[eid] = 16
  rectangle.h[eid] = 16

  addComponent(world, eid, input)
  input.x[eid] = 0
  input.y[eid] = 0
  input.a[eid] = false
  input.b[eid] = false

  return eid
}
