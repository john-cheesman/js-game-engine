import MenuScene from './scenes/menu-scene'

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

const menuScene = new MenuScene(keys, pads)

menuScene.enter()

let previousTime = 1

const loop = t => {
  menuScene.update((t - previousTime) / 1000)
  previousTime = t
  window.requestAnimationFrame(loop)
}

loop()
