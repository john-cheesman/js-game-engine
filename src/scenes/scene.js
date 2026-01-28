import { createWorld } from 'bitecs'

export default class Scene {
  constructor (name, app, keys, pads, gfx) {
    this.world = createWorld()
    this.world.name = name
    this.app = app
    this.keys = keys
    this.pads = pads
    this.gfx = gfx
  }

  enter () {
    console.log(`Entered ${this.world.name}`)
  }

  update (dt) {}

  draw () {}

  leave () {
    console.log(`Left ${this.world.name}`)
  }
}
