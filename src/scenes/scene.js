import { createWorld } from 'bitecs'

export default class Scene {
    constructor(name, app) {
        this.world = createWorld()
        this.world.name = name
        this.app = app
    }

    enter() {
        console.log(`Entered ${this.world.name}`)
    }

    update(dt) {}

    draw() {}

    leave() {
        console.log(`Left ${this.world.name}`)
    }
}

