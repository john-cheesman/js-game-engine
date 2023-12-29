import { addEntity, addComponent } from 'bitecs'
import position from '../components/position'
import tilemap from '../components/tilemap'

export default (world, mapId) => {
    let eid = addEntity(world)

    addComponent(world, position, eid)
    position.x[eid] = 0
    position.y[eid] = 0
    position.z[eid] = 1

    addComponent(world, tilemap, eid)
    tilemap.id[eid] = mapId

    return eid
}

