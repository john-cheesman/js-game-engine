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
  }
}
