import { pipe } from 'bitecs'
import Scene from './scene'
import player from '../entities/player'
import map from '../entities/map'
import createRectangleRenderSystem from '../systems/rectangle-render-system'
import createTilemapRenderSystem from '../systems/tilemap-render-system'

export default class MenuScene extends Scene {
  constructor (app) {
    super('menu_scene', app)
  }

  enter () {
    super.enter()
    this.player = player(this.world)
    this.map = map(this.world, 0)
    const rectangleRenderSystem = createRectangleRenderSystem(this.app)
    const tilemapRenderSystem = createTilemapRenderSystem(this.app)
    this.pipeline = pipe(tilemapRenderSystem, rectangleRenderSystem)

    this.app.ticker.add(dt => {
      this.pipeline(this.world)
    })
  }

  update (dt) {}

  draw () {}

  leave () {
    super.leave()
  }
}
