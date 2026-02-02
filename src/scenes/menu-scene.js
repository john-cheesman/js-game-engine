import Scene from './scene'
import player from '../entities/player'
import map from '../entities/map'
import rectangleRenderSystem from '../systems/rectangle-render-system'
import tilemapRenderSystem from '../systems/tilemap-render-system'
import inputSystem from '../systems/input-system'
import positionSystem from '../systems/position-system'
import playerControlSystem from '../systems/player-control-system'

export default class MenuScene extends Scene {
  constructor (app) {
    super('menu_scene', app)
  }

  enter () {
    super.enter()
    this.player = player(this.world)
    this.map = map(this.world, 0)
  }

  update (dt) {
    this.world.dt = dt
    inputSystem(this.world, this.app)
    playerControlSystem(this.world)
    positionSystem(this.world)
  }

  draw () {
    super.draw()
    tilemapRenderSystem(this.world)
    rectangleRenderSystem(this.world, this.app)
  }

  leave () {
    super.leave()
  }
}
