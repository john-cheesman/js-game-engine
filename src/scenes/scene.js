import { createWorld } from 'bitecs'

export default class Scene {
  constructor (name, app) {
    this.world = createWorld()
    this.name = name
    this.app = app
  }

  enter () {
    console.log(`Entered ${this.name}`)
  }

  update (dt) {}

  draw () {
      this.app.context.clearRect(0, 0, this.app.canvas.width, this.app.canvas.height)
      this.app.context.fillStyle = '#000000'
      this.app.context.fillRect(0, 0, this.app.canvas.width, this.app.canvas.height)
  }

  leave () {
    console.log(`Left ${this.name}`)
  }
}
