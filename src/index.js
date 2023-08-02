import { Engine } from 'matter-js'
import * as Pixi from 'pixi.js'
import { Types, defineComponent } from 'bitecs'
import 'normalize.css'

import MenuScene from './scenes/menu-scene'

const app = new Pixi.Application({ background: '#000000', resizeTo: window })
const engine = Engine.create()
const stack = []

const Vector3 = { x: Types.f32, y: Types.f32, z: Types.f32 }
const Position = defineComponent(Vector3)
const Velocity = defineComponent(Vector3)

const menuScene = new MenuScene(app)

menuScene.enter()
document.body.appendChild(app.view)

