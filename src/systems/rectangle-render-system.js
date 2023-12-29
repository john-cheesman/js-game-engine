import * as Pixi from 'pixi.js'
import { defineSystem, defineQuery } from 'bitecs'
import position from '../components/position'
import rectangle from '../components/rectangle'

export default app => {
  const query = defineQuery([position, rectangle])

  return defineSystem((world) => {
    const ents = query(world)

    ents.forEach(eid => {
      const graphics = new Pixi.Graphics()

      graphics.lineStyle(1, 0xFFFFFF)
      graphics.drawRect(position.x[eid] + rectangle.x[eid], position.x[eid] + rectangle.x[eid], rectangle.w[eid], rectangle.h[eid])
      app.stage.addChild(graphics)
    })

    return world
  })
}
