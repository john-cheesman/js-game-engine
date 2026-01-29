import { pipe } from 'bitecs'
import Scene from './scene'
import player from '../entities/player'
import map from '../entities/map'
import rectangleRenderSystem from '../systems/rectangle-render-system'
import tilemapRenderSystem from '../systems/tilemap-render-system'
import inputSystem from '../systems/input-system'
import positionSystem from '../systems/position-system'
import playerControlSystem from '../systems/player-control-system'

export default class MenuScene extends Scene {
  constructor (keys, pads) {
    super('menu_scene', keys, pads)
  }

  enter () {
    super.enter()
    this.player = player(this.world)
    this.map = map(this.world, 0)
  }

  update (dt) {
    this.world.dt = dt
      inputSystem(this.world, this.keys, this.pads)
      playerControlSystem(this.world)
      positionSystem(this.world)
      tilemapRenderSystem(this.world)
      rectangleRenderSystem(this.world)
  }

  draw () {}

  leave () {
    super.leave()
  }
}
