import { createWorld } from 'bitecs'

export default class Scene {
  constructor (name, keys, pads) {
    this.world = createWorld()
    this.world.name = name
    this.keys = keys
    this.pads = pads
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
