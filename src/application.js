export default class Application {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.canvas = document.createElement("canvas");
    this.canvas.width = w;
    this.canvas.height = h;
    this.context = this.canvas.getContext("2d");
    this.context.imageSmoothingEnabled = false;
    const appContainer = document.getElementById("app");
    appContainer.append(this.canvas);

    const keyControls = [
      "KeyZ",
      "KeyX",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];

    this.keys = {};
    this.pads = [];
    this.input = {
      x: 0,
      y: 0,
      a: 0,
      b: 0,
    };

    document.addEventListener("keydown", (e) => {
      if (keyControls.includes(e.code)) {
        this.keys[e.code] = true;
      }
    });

    document.addEventListener("keyup", (e) => {
      if (this.keys[e.code]) {
        this.keys[e.code] = false;
      }
    });

    document.addEventListener("gamepadconnected", (e) =>
      this.pads.push(e.gamepad.index)
    );

    document.addEventListener("gamepaddisconnected", (e) => {
      const index = this.pads.findIndex(e.gamepad.index);
      delete this.pads[index];
    });

    const gamepadBtns = document.querySelectorAll("[data-btn]");
    const gamepadDpad = document.querySelector("[data-dpad]");

    gamepadBtns.forEach((btn) => {
      btn.addEventListener("touchstart", (e) => {
        if (keyControls.includes(e.currentTarget.dataset.btn)) {
          this.keys[e.currentTarget.dataset.btn] = true;
        }
      });

      btn.addEventListener("touchend", (e) => {
        if (this.keys[e.currentTarget.dataset.btn]) {
          this.keys[e.currentTarget.dataset.btn] = false;
        }
      });
    });

    this.handleDpad = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const third = rect.width / 3;
      const x =
        e.clientX < rect.x + third
          ? -1
          : e.clientX > rect.x + third * 2
          ? 1
          : 0;
      const y =
        e.clientY < rect.y + third
          ? -1
          : e.clientY > rect.y + third * 2
          ? 1
          : 0;
      console.log(x, y);
      this.input.x = x;
      this.input.y = y;
    };

    gamepadDpad.addEventListener("pointerdown", this.handleDpad);
    gamepadDpad.addEventListener("pointermove", this.handleDpad);
    gamepadDpad.addEventListener("pointerup", (_) => {
      this.input.x = 0;
      this.input.y = 0;
    });
  }
}
