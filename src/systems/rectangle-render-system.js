import * as Pixi from 'pixi.js'
import { query } from 'bitecs'
import position from '../components/position'
import rectangle from '../components/rectangle'

export default app => {
  return world => {
    for (const eid of query(world, [position, rectangle])) {
      const graphics = new Pixi.Graphics()

      graphics.lineStyle(1, 0xffffff)
      graphics.drawRect(
        position.x[eid] + rectangle.x[eid],
        position.x[eid] + rectangle.x[eid],
        rectangle.w[eid],
        rectangle.h[eid]
      )
      app.stage.addChild(graphics)
    }

    return world
  }
}
