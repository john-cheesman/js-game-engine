import { addEntity, addComponent } from 'bitecs'
import position from '../components/position'
import tilemap from '../components/tilemap'

export default (world, mapId) => {
  const eid = addEntity(world)

  addComponent(world, eid, position)
  position.x[eid] = 0
  position.y[eid] = 0
  position.z[eid] = 1

  addComponent(world, eid, tilemap)
  tilemap.id[eid] = mapId

  return eid
}
