export default class Application {
    constructor(w, h) {
        this.width = w
        this.height = h
        this.canvas = document.createElement('canvas')
        const appContainer = document.getElementById('app')
        appContainer.append(this.canvas)
    }
}