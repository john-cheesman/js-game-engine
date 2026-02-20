export default class Application {
  constructor (w, h) {
    this.width = w
    this.height = h
    this.canvas = document.createElement('canvas')
    this.canvas.width = w
    this.canvas.height = h
    this.context = this.canvas.getContext('2d')
    this.context.imageSmoothingEnabled = false
    const appContainer = document.getElementById('app')
    appContainer.append(this.canvas)

    const keyControls = [
      'KeyZ',
      'KeyX',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight'
    ]

    this.keys = {}
    this.pads = []
    this.input = {
      x: 0,
      y: 0,
      a: 0,
      b: 0
    }

    document.addEventListener('keydown', (e) => {
      if (keyControls.includes(e.code)) {
        switch (e.code) {
          case 'KeyZ':
            this.input.a = 1
            break
          case 'KeyX':
            this.input.b = 1
            break
          case 'ArrowUp':
            this.input.y = -1
            break
          case 'ArrowDown':
            this.input.y = 1
            break
          case 'ArrowLeft':
            this.input.x = -1
            break
          case 'ArrowRight':
            this.input.x = 1
        }
      }
    })

    document.addEventListener('keyup', (e) => {
      if (this.keys[e.code]) {
        this.keys[e.code] = false
      }
    })

    document.addEventListener('gamepadconnected', (e) =>
      this.pads.push(e.gamepad.index)
    )

    document.addEventListener('gamepaddisconnected', (e) => {
      const index = this.pads.findIndex(e.gamepad.index)
      delete this.pads[index]
    })

    const gamepadBtns = document.querySelectorAll('[data-btn]')
    const gamepadDpad = document.querySelector('[data-dpad]')

    gamepadBtns.forEach((btn) => {
      btn.addEventListener('touchstart', (e) => {
        e.preventDefault()
        if (e.currentTarget.dataset.btn in this.input) {
          this.input[e.currentTarget.dataset.btn] = 1
          // alert(`button ${e.currentTarget.dataset.btn} pressed`);
        }
      })

      btn.addEventListener('touchend', (e) => {
        e.preventDefault()
        if (this.input[e.currentTarget.dataset.btn] === 1) {
          this.input[e.currentTarget.dataset.btn] = 0
        }
      })
    })

    this.handleDpad = (e) => {
      e.preventDefault()
      const t = e.targetTouches[0]
      const el = e.currentTarget
      const rect = el.getBoundingClientRect()
      const third = rect.width / 3
      const x =
        t.clientX < rect.x + third
          ? -1
          : t.clientX > rect.x + third * 2
            ? 1
            : 0
      const y =
        t.clientY < rect.y + third
          ? -1
          : t.clientY > rect.y + third * 2
            ? 1
            : 0
      console.log(x, y)
      this.input.x = x
      this.input.y = y
    }

    this.handleDpadEnd = (e) => {
      e.preventDefault()
      this.input.x = 0
      this.input.y = 0
    }

    gamepadDpad.addEventListener('touchstart', this.handleDpad)
    gamepadDpad.addEventListener('touchmove', this.handleDpad)
    gamepadDpad.addEventListener('touchend', this.handleDpadEnd)
    gamepadDpad.addEventListener('touchcancel', this.handleDpadEnd)
  }
}
