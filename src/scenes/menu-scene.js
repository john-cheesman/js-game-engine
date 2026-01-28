import { pipe } from 'bitecs'
import { Ticker } from 'pixi.js'
import Scene from './scene'
import player from '../entities/player'
import map from '../entities/map'
import createRectangleRenderSystem from '../systems/rectangle-render-system'
import createTilemapRenderSystem from '../systems/tilemap-render-system'
import createInputSystem from '../systems/input-system'
import createPositionSystem from '../systems/position-system'
import createPlayerControlSystem from '../systems/player-control-system'

export default class MenuScene extends Scene {
  constructor (app, keys, pads, gfx) {
    super('menu_scene', app, keys, pads, gfx)
    this.ticker = new Ticker()
  }

  enter () {
    super.enter()
    this.player = player(this.world)
    this.map = map(this.world, 0)
    const rectangleRenderSystem = createRectangleRenderSystem(this.app, this.gfx)
    const tilemapRenderSystem = createTilemapRenderSystem(this.app)
    const inputSystem = createInputSystem(this.keys, this.pads)
    const playerControlSystem = createPlayerControlSystem()
    const positionSystem = createPositionSystem()
    this.pipeline = pipe(tilemapRenderSystem, rectangleRenderSystem)

    this.ticker.add(t => {
      // this.pipeline(this.world)
      inputSystem(this.world)
      playerControlSystem(this.world)
      positionSystem(this.world, t.deltaTime)
      rectangleRenderSystem(this.world)
    })

    this.ticker.start()
  }

  update (dt) {}

  draw () {}

  leave () {
    super.leave()
  }
}
