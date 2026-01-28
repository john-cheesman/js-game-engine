import { Engine } from 'matter-js'
import { Application } from 'pixi.js'
import './assets/forest.png'
import MenuScene from './scenes/menu-scene'

(async () => {
const app = new Application()
await app.init({ background: '#000000', resizeTo: window })
Engine.create()

const keyControls = [
  'KeyZ',
  'KeyX',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight'
]

const keys = {}
const pads = []
const gfx = new Map()

document.addEventListener('keydown', e => {
  if (keyControls.includes(e.code)) {
    keys[e.code] = true
  }
})

document.addEventListener('keyup', e => {
  if (keys[e.code]) {
    keys[e.code] = false
  }
})

document.addEventListener('gamepadconnected', e => pads.push(e.gamepad.index))

document.addEventListener('gamepaddisconnected', e => {
  const index = pads.findIndex(e.gamepad.index)
  delete pads[index]
})

const menuScene = new MenuScene(app, keys, pads, gfx)

menuScene.enter()
document.body.appendChild(app.canvas)
})()
