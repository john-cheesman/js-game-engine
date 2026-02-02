import Application from './application'
import MenuScene from './scenes/menu-scene'

const app = new Application(160, 144)
const menuScene = new MenuScene(app)

menuScene.enter()

let previousTime = 0

const loop = (t) => {
  menuScene.update((t - previousTime) / 1000)
  menuScene.draw()
  previousTime = t
  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
