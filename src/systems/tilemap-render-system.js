import * as Pixi from 'pixi.js'
import { defineSystem, defineQuery, enterQuery } from 'bitecs'
import position from '../components/position'
import tilemap from '../components/tilemap'
import forestData from '../maps/forest.json'

export default app => {
    const query = defineQuery([position, tilemap])
    const enter = enterQuery(query)

    return defineSystem((world) => {
        const enterEnts = enter(world)

        enterEnts.forEach(eid => {
            const mapPath = mapData[tilemap.id[eid]]
            console.log(mapData[tilemap.id[eid]])
//            app.loader
//               .add('map', mapPath)
//                .load(() => {
//                    const stage = app.loader.resources['map'].stage
//                })
        })

        const ents = query(world)

        ents.forEach(eid => {
        })

        return world
    })
}

