import { pipe } from 'bitecs'
import Scene from './scene'
import player from '../entities/player'
import createRectangleRenderSystem from '../systems/rectangle-render-system'

export default class MenuScene extends Scene {
    constructor(app) {
        super('menu_scene', app)
    }

    enter() {
        super.enter()
        this.player = player(this.world)
        const rectangleRenderSystem = createRectangleRenderSystem(this.app)
        this.pipeline = pipe(rectangleRenderSystem)

        this.app.ticker.add(dt => {
            this.pipeline(this.world)
        })
    }

    update(dt) {}

    draw() {}

    leave() {
        super.leave()
    }
}

