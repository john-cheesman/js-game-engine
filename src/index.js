import { Engine } from 'matter-js'
import { Application } from 'pixi.js'
import './assets/forest.png'
import MenuScene from './scenes/menu-scene'

const app = new Application({ background: '#000000', resizeTo: window })
Engine.create()

const menuScene = new MenuScene(app)

menuScene.enter()
document.body.appendChild(app.view)
