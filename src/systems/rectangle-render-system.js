import { Graphics } from 'pixi.js'
import { query } from 'bitecs'
import position from '../components/position'
import rectangle from '../components/rectangle'

export default (app, gfx) => {
  return world => {
    for (const eid of query(world, [position, rectangle])) {
      if (gfx.has(eid)) {
        const g = gfx.get(eid)
        g.rect(
          position.x[eid] + rectangle.x[eid],
          position.y[eid] + rectangle.y[eid],
          rectangle.w[eid],
          rectangle.h[eid]
        )
      } else {
        const graphics = new Graphics()

        graphics
          .rect(
            position.x[eid] + rectangle.x[eid],
            position.y[eid] + rectangle.y[eid],
            rectangle.w[eid],
            rectangle.h[eid]
          )
          .stroke({ color: 0xffffff, pixelLine: true })

        app.stage.addChild(graphics)
        gfx.set(eid, graphics)
      }
    }

    return world
  }
}
