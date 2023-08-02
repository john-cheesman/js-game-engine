import { addEntity, addComponent } from 'bitecs'
import velocity from '../components/velocity'
import position from '../components/position'
import rectangle from '../components/rectangle'

export default function(world) {
    let eid = addEntity(world)

    addComponent(world, position, eid)
    position.x[eid] = 0
    position.y[eid] = 0
    position.z[eid] = 1

    addComponent(world, velocity, eid)
    velocity.x[eid] = 0
    velocity.y[eid] = 0

    addComponent(world, rectangle, eid)
    rectangle.x[eid] = 0
    rectangle.y[eid] = 0
    rectangle.w[eid] = 16
    rectangle.h[eid] = 16

    return eid
}

