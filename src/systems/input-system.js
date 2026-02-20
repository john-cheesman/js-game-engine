import { query } from 'bitecs'
import input from '../components/input'

export default (world, app) => {
  for (const eid of query(world, [input])) {
    input.x[eid] = 0
    input.y[eid] = 0
    if (app.keys.ArrowUp) input.y[eid] -= 1
    if (app.keys.ArrowDown) input.y[eid] += 1
    if (app.keys.ArrowLeft) input.x[eid] -= 1
    if (app.keys.ArrowRight) input.x[eid] += 1
    input.a = app.keys.KeyZ
    input.b = app.keys.KeyX
    input.x[eid] = app.input.x
    input.y[eid] = app.input.y
    input.aDown[eid] = app.input.a
    input.aPressed[eid] = app.input.a
    input.bDown[eid] = app.input.b
    input.bPressed[eid] = app.input.b
  }

  return world
}
