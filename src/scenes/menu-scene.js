import Scene from './scene'
import player from '../entities/player'
import map from '../entities/map'
import rectangleRenderSystem from '../systems/rectangle-render-system'
import tilemapRenderSystem from '../systems/tilemap-render-system'
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
    playerControlSystem(this.world, this.app)
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
